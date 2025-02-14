import { NgStyle } from '@angular/common';
import { Component, ElementRef, inject, input, OnChanges, OnDestroy, OnInit, output, signal, SimpleChanges, viewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ImageService } from '../../core/service/image.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../core/widget/delete-dialog/delete-dialog.component';
import { SubSink } from 'subsink';
import { MatError } from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TextNumberDirective } from '../../core/directive/text-number.directive';

@Component({
  selector: 'app-products-card',
  imports: [MatIconModule,NgStyle, ReactiveFormsModule, MatError, MatTooltipModule, TextNumberDirective],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.scss',
  providers:[ImageService]
})
export class ProductsCardComponent implements OnInit , OnChanges, OnDestroy{
  readonly dialog = inject(MatDialog);
  public _imageService = inject(ImageService);
  private _formBuilder =inject(FormBuilder);


  public upload = viewChild<ElementRef>('upload');

  public createEnable = input(false);
  public productDetails= input<ProductDetails >( {
    name: '',
    description: '',
    price: 0,
    quantity: '0'
  });
  public create = signal(false);
  public deleteEvent = output<string>();
  public details = output<Record<string,string | undefined | null | Uint8Array | number>>();

  public productForm !:FormGroup<{
    name: FormControl<string | null>;
    description: FormControl<string | null>;
    price: FormControl<number | null>;
    quantity: FormControl<string | null>;
  }>;
  public subs = new SubSink();

  public file = signal<{filename : string ; data?:  Uint8Array}>({
    filename: ''
  });
  public imageUrl = signal('');

  constructor() {
  }
  public editEnable = signal(false);

  ngOnInit(): void {
    this.productForm = this._formBuilder.group({
      name: ['', Validators.required],
      description: '',
      price: 0,
      quantity: '0'
    });
  }

  ngOnChanges(): void {
    this.imageUrl.set('');
    if( this.productDetails().data &&this.productDetails().data?.length !== 0) {
     this.imageUrl.set( this._imageService.createUrl(this.productDetails().data ?? new Uint8Array));
    }

  }
  openDialog(): void {
    const dialogRef =  this.dialog.open(DeleteDialogComponent, {
      width: '250px',
        data: {name: this.productDetails().name, animal: false},
    });
   this.subs.add( dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete();
      }
    }));
  }


  edit() {
    this. setForm();
    this.file.set({
      filename:  this.productDetails().filename ?? '',
      data:  this.productDetails().data ?? new Uint8Array
    })
    this.editEnable.set(true);
  }

  setForm() {
    this.productForm = this._formBuilder.group({
      name: [ this.productDetails().name, Validators.required],
      description: this.productDetails().description,
      price: this.productDetails().price,
      quantity: this.productDetails().quantity
    });
  }

  close() {
    this.create.set(false);
    this.edit();
    if(this.editEnable() ) {
      this.editEnable.set(false);
    }
  }


  uploadedFile(event:Event) {
    const element = event.target as HTMLInputElement
    this._imageService.uploadImage(element).then((data)=> {
      this.file.set( data);
      this.imageUrl.set(  this._imageService.createUrl(data.data ?? new Uint8Array));
    })
  }

  delete() {
   this.deleteEvent.emit(this.productDetails()?.id ?? '');
  }

  remove() {
    this.imageUrl.set('');
    this.file.set({
      filename:'',
      data: new Uint8Array
    })
    if (this.upload()) {
    (this.upload() as ElementRef).nativeElement.value = ''
    }

  }

  save() {
    this.create.set(true);
    if(this.productForm.invalid) {
      return;
    }
    this.create.set(false);
    this.details.emit({...this.productForm.value , ...this.file(), id: this.productDetails().id });
    this. setForm();
    this.remove() ;
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }
}

export interface ProductDetails {
  id?: string | null;
  name: string | null;
  description: string | null;
  price: number | null;
  quantity: string | null;
  data?:Uint8Array | null;
  filename?: string | null;
}
