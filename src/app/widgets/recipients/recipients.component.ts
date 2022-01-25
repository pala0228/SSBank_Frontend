import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipients',
  templateUrl: './recipients.component.html',
  styleUrls: ['./recipients.component.scss']
})
export class RecipientsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  /**
   * @ignore
   * Method to navigate to view-recipients component with queryParams.
   */
  onView(source: string) {
    this.router.navigate(["/view-recipients"], { queryParams: { source } });
  }
}
