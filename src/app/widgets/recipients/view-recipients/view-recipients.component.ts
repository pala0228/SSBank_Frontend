import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipient } from './view-recipients.model';

@Component({
  selector: 'app-view-recipients',
  templateUrl: './view-recipients.component.html',
  styleUrls: ['./view-recipients.component.scss']
})
export class ViewRecipientsComponent implements OnInit {
  /**
   * @ignore
   * To hold recipient row when user selects.
   */
  selectedRecipient = {} as Recipient;
  /**
   * @ignore
   * To hold recipient row when user selects.
   */
  recipientDetails = {} as Recipient;
  /**
   * @ignore
   * Source of bank - Same or Other bank.
   */
  source: string = '';
  /**
   * @ignore
   * Flag to add new recipient component
   */
  activateNewRecipient: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.source = this.activatedRoute.snapshot.queryParams['source'];
  }
  /**
   * @ignore
   * Method to recieve data from child component
   * @param event
   */
  recipientRow(event: Recipient) {
    if (event) {
      this.selectedRecipient = event;
    }
  }
  /**
   * @ignore
   * Method to add new recipient
   */
  onAddRecipient() {
    this.recipientDetails = {} as Recipient;
    this.activateNewRecipient = !this.activateNewRecipient;
  }
  /**
   * @ignore
   * Method to activate details of recipient slot
   */
  activateDetails(flag: boolean) {
    this.activateNewRecipient = flag;
    this.cd.detectChanges();
  }
  /**
   * @ignore
   * Method to activate add-recipient component by passing recipient details as input.
   */
  receivedData(recipient: Recipient) {
    if (recipient) {
      this.recipientDetails = recipient;
      this.activateNewRecipient = !this.activateNewRecipient;
    }
  }
}
