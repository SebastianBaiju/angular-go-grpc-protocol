import { UserDetails } from './../profiles.component';
import { Component, ElementRef, inject, OnDestroy, OnInit, signal, viewChild } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet } from '@angular/material/bottom-sheet';

import { MatButtonModule } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';
import { CreateUserRequest, Role, UpdateUserRequest } from '../../pkg/user.pb';
import { UserService } from '../service/user.service';
import { SubSink } from 'subsink';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImageService } from '../../core/service/image.service';
import { ClipboardModule } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-add-profile',
  imports: [MatButtonModule, MatSelectModule, ReactiveFormsModule, ClipboardModule],
  templateUrl: './add-profile.component.html',
  styleUrl: './add-profile.component.scss',
  providers: [UserService, ImageService]
})
export class AddProfileComponent implements OnDestroy, OnInit {
  public upload = viewChild<ElementRef>('upload');
  private _bottomSheet = inject(MatBottomSheet);
  private _usersService = inject(UserService);
  private _toaster = inject(ToastrService);
  public _imageService = inject(ImageService);
  public roleList = signal<{ id: string; role: string; }[]>([]);
  public _formBuilder = inject(FormBuilder);
  public userForm !: FormGroup<{
    name: FormControl<string | null>;
    username: FormControl<string | null>;
    role: FormControl<string | null>;
  }>;
  private subs = new SubSink();
  private status = signal(false);
  public create = signal(false);
  public file = signal<{ filename: string; data?: Uint8Array }>({
    filename: ''
  });
  public imageUrl = signal('');
  public data: UserDetails = inject(MAT_BOTTOM_SHEET_DATA);
  public detailsData !: Record<string, string | undefined | null | Uint8Array>;
  public edit = false;
  public password = signal<string>('');

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      name: [this.data?.name ?? '', Validators.required],
      username: [this.data?.username ?? '', Validators.required],
      role: [this.data?.role?.id ?? '', Validators.required]
    });
    if (this.data) {
      this.edit = true;
    }
    this.imageUrl.set('');
    if (this.data?.data && this.data.data?.length !== 0) {
      this.imageUrl.set(this._imageService.createUrl(this.data.data ?? new Uint8Array()));
    }
    this.file.set({
      filename: this.data?.filename ?? '',
      data: this.data?.data ??  new Uint8Array()
    })
    this.getRole();
  }

  close() {
    this._bottomSheet.dismiss({
      status: this.status()
    })
  }

  uploadedFile(event: Event) {
    const element = event.target as HTMLInputElement
    this._imageService.uploadImage(element).then((data) => {
      this.file.set(data);
      this.imageUrl.set(this._imageService.createUrl(data.data ?? new Uint8Array()));
    })
  }


  remove() {
    this.imageUrl.set('');
    this.file.set({
      filename: '',
      data: new Uint8Array()
    })
    if (this.upload()) {
      (this.upload() as ElementRef).nativeElement.value = ''
    }

  }

  createUser() {
    const create = new CreateUserRequest({
      ...this.detailsData
    })
    this.subs.add(this._usersService.createUser(create).subscribe({
      next: data => {
        this._toaster.success(data.value ?? '');
        this.password.set(data.password);
        this.status.set(true);
      },
      error: (err) => {
        this._toaster.error(err.statusMessage ?? '');
      }
    }
    ));
  }

  editUser() {
    const update = new UpdateUserRequest({
      ...this.detailsData
    })
    this.subs.add(this._usersService.updateUser(update).subscribe({
      next: data => {
        this._toaster.success(data.value ?? '');
        this.status.set(true);
        this.close();
      },
      error: (err) => {
        this._toaster.error(err.statusMessage ?? '');
      }
    }
    ));
  }

  getRole() {
    this.subs.add(this._usersService.roleList().subscribe(data => {
      this.roleList.set(data.result ?? []);
    }));
  }
  addProfile() {
    this.create.set(true);
    if (this.userForm.invalid) {
      return;
    }
    if (this.data?.id) {
      this.detailsData = { ...this.userForm.value, ...this.file(), id: this.data?.id }
    } else {
      this.detailsData = { ...this.userForm.value, ...this.file() }
    }

    if (this.edit) {
      this.editUser();
    } else {
      this.createUser();
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
