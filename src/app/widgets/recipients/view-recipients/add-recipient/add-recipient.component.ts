import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/shared/common/validators/account.validators';
import { Contact } from 'src/app/shared/common/validators/cell.validator';
import { Recipient } from '../view-recipients.model';

@Component({
  selector: 'app-add-recipient',
  templateUrl: './add-recipient.component.html',
  styleUrls: ['./add-recipient.component.scss']
})
export class AddRecipientComponent implements OnInit {
  /**
   * @ignore
   * Input from the container
   */
  @Input() set selectedRecipient(value: Recipient) {
    setTimeout(() => {
      this.updateFormControls(value);
    }, 500);
  }
  /**
   * @ignore
   * Form to hold font controls
   */
  newRecipientForm = {} as FormGroup;
  /**
   * @ignore
   * To activate account number field for user to enter
   */
  activateAccountNumber: boolean = false;
  /**
   * @ignore
   * To activate branch name field for user to enter
   */
  activateBranchName: boolean = false;
  /**
   * @ignore
   * To activate branch code field for user to enter
   */
  activateBranchCode: boolean = false;
  /**
   * @ignore
   * To activate cell number field for user to enter
   */
  activateCellNumber: boolean = false;
  /**
   * @ignore
   * To activate email field for user to enter
   */
  activateEmail: boolean = false;
  /**
   * @ignore
   * action item to be sent to the container to close add new recipient component
   */
  @Output() closeAddRecipientComponent = new EventEmitter<boolean>();

  branches: any[] = [
    { branchCode: '12345', branchName: 'SBI' },
    { branchCode: '12346', branchName: 'HDFC' },
    { branchCode: '12347', branchName: 'Nedbank' },
  ];

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newRecipientForm = this.fb.group({
      recipientName: this.fb.group({
        firstName: ["", [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
        lastName: ["", [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]]
      }),
      account: this.fb.group({
        accountNumber: ["", [Validators.required, Account.AccountNumberValidator]],
        branchCode: ["", [Validators.required, Account.BranchCodeValidator]],
        branchName: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/)]]
      }),
      contact: this.fb.group({
        cellNumber: ["", [Contact.CellValidator]],
        emailId: ["", [Validators.email]],
      }),
      yourReference: ["", [Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],
      theirReference: ["", [Validators.pattern(/^[a-zA-Z0-9 ]+$/)]]
    });
  }
  /**
   * @ignore
   * Method to close add recipient window and navigate to view recipients component
   */
  onClose() {
    this.closeAddRecipientComponent.emit(false);
  }
  /**
   * @ignore
   * Method to submit form data to back end
   */
  onSubmit() {
    console.log(this.newRecipientForm);
  }
  /**
   * @ignore
   * Method to reset form controls back to normal
   */
  onReset() {
    this.newRecipientForm.reset();
  }
  /**
   * @ignore
   * Method to toggle account details updation
   */
  onAddAccountNumber() {
    this.activateAccountNumber = !this.activateAccountNumber;
  }
  /**
   * @ignore
   * Method to update form controls for edit
   */
  private updateFormControls(recipient: Recipient) {
    if (recipient.recipientName) {
      this.newRecipientForm.get('recipientName')?.setValue({
        firstName: recipient.recipientName?.firstName,
        lastName: recipient.recipientName?.lastName
      });
    }
    if (recipient.account) {
      this.activateAccountNumber = true;
      this.activateBranchCode = true;
      this.activateBranchName = true;
      this.newRecipientForm.get('account')?.setValue({
        accountNumber: recipient.account?.accountNumber,
        branchCode: recipient.account?.branchCode,
        branchName: recipient.account?.branchCode
      });
    }
    if (recipient.contact) {
      this.activateCellNumber = true;
      this.activateEmail = true;
      this.newRecipientForm.get('contact')?.setValue({
        cellNumber: recipient.contact?.cellNumber,
        emailId: recipient.contact?.emailId
      });
    }
    if (recipient.yourReference) {
      this.newRecipientForm.get('yourReference')?.setValue(recipient.yourReference);
    }
    if (recipient.theirReference) {
      this.newRecipientForm.get('theirReference')?.setValue(recipient.theirReference);
    }
  }
}
