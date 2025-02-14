import { MatButtonModule } from '@angular/material/button';
import { Component, inject, model } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-delete-dialog',
  imports: [ MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatButtonModule],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
}
export interface DialogData {
  status: boolean;
  name: string;
}
