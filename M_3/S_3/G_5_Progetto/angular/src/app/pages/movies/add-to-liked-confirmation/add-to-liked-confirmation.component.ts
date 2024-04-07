import { Component, Inject } from '@angular/core';
import {DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
@Component({
  selector: 'app-add-to-liked-confirmation',
  templateUrl: './add-to-liked-confirmation.component.html',
  styleUrl: './add-to-liked-confirmation.component.scss'
})
export class AddToLikedConfirmationComponent {
  constructor(
    public dialogRef: DialogRef<string>,
  ) {}
}
