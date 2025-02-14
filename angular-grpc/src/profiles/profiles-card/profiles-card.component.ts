
import { Component, inject, input, OnChanges, OnDestroy, output, signal } from '@angular/core';
import { UserDetails } from '../profiles.component';
import { SubSink } from 'subsink';
import { DeleteDialogComponent } from '../../core/widget/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ImageService } from '../../core/service/image.service';
import { DotDownItems, DotDropdownComponent } from '../../core/widget/dot-dropdown/dot-dropdown.component';
import { Role } from '../../pkg/user.pb';

@Component({
  selector: 'app-profiles-card',
  imports: [DotDropdownComponent],
  templateUrl: './profiles-card.component.html',
  styleUrl: './profiles-card.component.scss',
  providers: [ImageService]
})
export class ProfilesCardComponent implements OnChanges, OnDestroy {
  readonly dialog = inject(MatDialog);
  public _imageService = inject(ImageService);

  public deleteEvent = output<string>();
  public editEvent = output<UserDetails>();

  public deleteEnable = input(true);
  public userDetails = input<UserDetails>({
    name: '',
    role: new Role({
      id: '',
      role: '',
    })
  });
  public imageUrl = signal('');
  private subs = new SubSink();
  public editEnable = signal(false);
  public iconDropdown = signal<{ event: string, name: string, icon: string, enable: true, class: string }[]>([{
    event: 'delete', name: 'Delete', icon: 'delete_forever', enable: true, class: 'dot-dropdown__delete-icon'
  },
  {
    event: 'edit', name: 'Edit', icon: 'edit', enable: true, class: 'dot-dropdown__edit-icon'
  }
  ]);
  public iconDropdownDelete = signal<{ event: string, name: string, icon: string, enable: true, class: string }[]>([
    {
      event: 'edit', name: 'Edit', icon: 'edit', enable: true, class: 'dot-dropdown__edit-icon'
    }
  ])
  ngOnChanges() {
    this.imageUrl.set('');
    if (this.userDetails().data && this.userDetails().data?.length !== 0) {
      this.imageUrl.set(this._imageService.createUrl(this.userDetails().data ?? new Uint8Array));
    }
  }

  edit() {
    this.editEvent.emit(this.userDetails());
    // this.editEnable.set(true);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: { name: this.userDetails().name, animal: false },
    });
    this.subs.add(dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete();
      }
    }));
  }

  itemClick(item: DotDownItems) {
    if (item.event === 'delete') {
      this.openDialog();
    } else if (item.event === 'edit') {
      this.edit();
    }

  }

  delete() {
    this.deleteEvent.emit(this.userDetails()?.id ?? '');
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
