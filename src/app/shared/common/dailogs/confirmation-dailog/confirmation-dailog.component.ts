import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dailog',
  templateUrl: './confirmation-dailog.component.html',
  styleUrls: ['./confirmation-dailog.component.scss']
})
export class ConfirmationDailogComponent implements OnInit {
  /**
   * @ignore
   * Message to show on dialog model
   */
  message: string = '';
  /**
   * @ignore
   * title message to show on dialog model
   */
  title: string = '';
  /**
   * @ignore
   * action type name to show on dialog model action button
   */
  actionType: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ConfirmationDailogComponent>) {
    this.dialogRef.disableClose = true;
    if (data) {
      this.message = data.message;
      this.title = data.title;
      this.actionType = data.actionType;
    }
  }

  ngOnInit(): void {
  }
  /**
   * @ignore
   * Method to proceed with action requested
   */
  onAction(action: string) {
    switch (this.actionType) {
      case action:
        console.log(action);
        break;

      default:
        break;
    }
  }

}
