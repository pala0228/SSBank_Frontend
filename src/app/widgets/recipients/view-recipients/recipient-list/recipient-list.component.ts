import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectionList } from '@angular/material/list';
import { Recipient } from '../view-recipients.model';


@Component({
  selector: 'app-recipient-list',
  templateUrl: './recipient-list.component.html',
  styleUrls: ['./recipient-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipientListComponent implements OnInit {
  /**
   * @ignore
   * Input to the component from outside - source to hold same bank or other bank ref
   */
  @Input() source: string = '';
  /**
   * @ignore
   * Output to trigger from component to outside world. holds selected recipient row
   */
  @Output() selectedRecipient = new EventEmitter<Recipient>();
  /**
   * @ignore
   * recipientsList to hold list of recipients available for customer
   */
  recipientsList = [
    {
      recipientId: "1",
      recipientName: {
        firstName: "Kireeti",
        lastName: "Pala"
      },
      account: {
        accountNumber: "12345678",
        branchCode: "12346",
        branchName: "HDFC"
      },
      contact: {
        cellNumber: "7032820228",
        emailId: "kireeti.pala0228@gmail.com"
      },
      yourReference: "Rajesh",
      theirReference: "Kireeti"
    },
    {
      recipientId: "1",
      recipientName: {
        firstName: "Sitha",
        lastName: "Pala"
      },
      account: {
        accountNumber: "12345678",
        branchCode: "12345",
        branchName: "SBI"
      },
      contact: {
        cellNumber: "7032820228",
        emailId: "kireeti.pala0228@gmail.com"
      },
      yourReference: "Rajesh",
      theirReference: "Kireeti"
    },
    {
      recipientId: "1",
      recipientName: {
        firstName: "Rajesh",
        lastName: "Pala"
      },
      account: {
        accountNumber: "12345678",
        branchCode: "12347",
        branchName: "Nedbank"
      },
      contact: {
        cellNumber: "7032820228",
        emailId: "kireeti.pala0228@gmail.com"
      },

      yourReference: "Rajesh",
      theirReference: "Kireeti"
    },
    {
      recipientId: "1",
      recipientName: {
        firstName: "Suresh",
        lastName: "Thota"
      },
      account: {
        accountNumber: "12345678",
        branchCode: "12346",
        branchName: "HDFC"
      },
      contact: {
        cellNumber: "7032820228",
        emailId: "kireeti.pala0228@gmail.com"
      },
      yourReference: "Rajesh",
      theirReference: "Kireeti"
    },
    {
      recipientId: "1",
      recipientName: {
        firstName: "Harish",
        lastName: "Miriyala"
      },
      account: {
        accountNumber: "12345678",
        branchCode: "12347",
        branchName: "Nedbank"
      },
      contact: {
        cellNumber: "7032820228",
        emailId: "kireeti.pala0228@gmail.com"
      },
      yourReference: "Rajesh",
      theirReference: "Kireeti"
    },
    {
      recipientId: "1",
      recipientName: {
        firstName: "Sahithi",
        lastName: "Pula"
      },
      account: {
        accountNumber: "12345678",
        branchCode: "12345",
        branchName: "SBI"
      },
      contact: {
        cellNumber: "7032820228",
        emailId: "kireeti.pala0228@gmail.com"
      },
      yourReference: "Rajesh",
      theirReference: "Kireeti"
    }
  ];
  /**
   * @ignore
   * Reactive form to hold searched information by the user
   */
  searchRecipientForm = {} as FormGroup;
  /**
   * @ignore
   * recipients to hold searched data
   */
  recipients: Recipient[] = [];

  constructor() { }

  ngOnInit(): void {
    //  Reactive form to track user searched recipient
    this.searchRecipientForm = new FormGroup({
      searchRecipient: new FormControl('', [Validators.pattern(/^[a-zA-Z0-9 ]+$/)])
    });
    // Deep clone of recipients list
    this.recipients = JSON.parse(JSON.stringify(this.recipientsList));

    // To filter data while user searching recipient details
    this.searchRecipientForm.get('searchRecipient')?.valueChanges.subscribe(value => {
      this.recipients = this.filterData(value);
    });
    // Update first recipient details by default
    this.selectedRecipient.emit(this.recipients[0]);
  }
  /**
   * @ignore
   * Method to trigger selected recipient row to outside world.
   * @param recipientsList
   */
  onSelectRecipientRow(recipientsList: MatSelectionList) {
    if (recipientsList) {
      this.selectedRecipient.emit(recipientsList.selectedOptions.selected[0]?.value);
    }
  }
  /**
   * @ignore
   * Method to return searched recipients list based on name and account number
   * @param searchedValue is searched value
   * @returns Recipients matched
   */
  private filterData(searchedValue: string): Recipient[] {
    let value = searchedValue.toLowerCase();

    return this.recipientsList.filter(object => object.recipientName.firstName.toLowerCase().includes(value) || object.recipientName.lastName.toLowerCase().includes(value) || object.account?.accountNumber.toLowerCase().includes(value));
  }
}
