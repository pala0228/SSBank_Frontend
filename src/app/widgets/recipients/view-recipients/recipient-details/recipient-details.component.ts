import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDailogComponent } from 'src/app/shared/common/dailogs/confirmation-dailog/confirmation-dailog.component';
import { Recipient } from '../view-recipients.model';

@Component({
  selector: 'app-recipient-details',
  templateUrl: './recipient-details.component.html',
  styleUrls: ['./recipient-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipientDetailsComponent implements OnInit {
  /**
   * @ignore
   * Input to the component. selectedRecipient holds selected recipient to view
   * details
   */
  @Input() selectedRecipient = {} as Recipient;
  /**
   * @ignore
   * Output event emitter to trigger recipient detail record to container
   */
  @Output() editRecipientDetails = new EventEmitter<Recipient>();

  constructor(private dailog: MatDialog) {
  }

  ngOnInit(): void {
  }
  /**
   * @ignore
   * Method to edit recipient details
   */
  onEditDetails(recipient: Recipient) {
    this.editRecipientDetails.emit(recipient);
  }
  /**
   * @ignore
   * Method to delete recipient from the list
   */
  onDeleteRecipient(recipient: Recipient) {
    let message = 'You are about to delete recipient: ' + recipient.recipientName.firstName + ' ' + recipient.recipientName.lastName + ', ' + 'Account number: ' + recipient.account.accountNumber + ', ' + 'branch name: ' + recipient.account.branchName;
    this.dailog.open(ConfirmationDailogComponent, {
      data: {
        message,
        title: 'Delete Confirmation',
        actionType: 'Delete'
      }
    })
  }
}
