import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { Transaction } from '../view-recipients.model';
import { TABLE_COUMNS } from '../view-recipients.constants';

@Component({
  selector: 'app-recipient-transactions',
  templateUrl: './recipient-transactions.component.html',
  styleUrls: ['./recipient-transactions.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RecipientTransactionsComponent implements OnInit, AfterViewInit {
  /**
   * @ignore
   * Table transaction data.
   */
  TABLE_DATA: Transaction[] = [
    {
      date: "10/11/2022",
      amount: 120,
      paymentReferenceNumber: 1234567,
      yourReference: "Rajesh",
      theirReference: "Kireeti",
      fromAccount: '12345678',
      toAccount: '87654211',
    },
    {
      date: "10/11/2022",
      amount: 600,
      paymentReferenceNumber: 1234567,
      yourReference: "Rajesh",
      theirReference: "Kireeti",
      fromAccount: '12345678',
      toAccount: '87654211',
    },
    {
      date: "10/11/2022",
      amount: 120,
      paymentReferenceNumber: 1234567,
      yourReference: "Rajesh",
      theirReference: "Kireeti",
      fromAccount: '12345678',
      toAccount: '87654211',
    },
    {
      date: "10/11/2022",
      amount: 600,
      paymentReferenceNumber: 1234567,
      yourReference: "Rajesh",
      theirReference: "Kireeti",
      fromAccount: '12345678',
      toAccount: '87654211',
    },
    {
      date: "10/11/2022",
      amount: 600,
      paymentReferenceNumber: 1234567,
      yourReference: "Rajesh",
      theirReference: "Kireeti",
      fromAccount: '12345678',
      toAccount: '87654211',
    },
  ];
  /**
   * @ignore
   * Table data source to hold data
   */
  dataSource: MatTableDataSource<Transaction>;
  /**
   * @ignore
   * Holds table column names
   */
  columnsToDisplay = TABLE_COUMNS;
  /**
   * @ignore
   * Helps in to toggle expanding a table row
   */
  expandedElement!: Transaction | null;
  /**
   * @ignore
   * selection to track row checkbox status
   */
  selection = new SelectionModel<Transaction>(true, []);
  /**
   * @ignore
   * Flag to toggle checkbox check or uncheck
   */
  checkboxSelectedFlag: boolean = false;
  /**
   * @ignore
   * Flag to toggle download icon for transaction proof of payment
   */
  toggleDownloadIcon: boolean = false;
  /**
   * @ignore
   * View child to show pagination of table
   */
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource(this.TABLE_DATA);
  }

  ngOnInit(): void {

  }
  /**
   * @ignore
   * Method to track checkbox check and uncheck actions
   */
  onChange(row: any) {
    this.selection.toggle(row);
    this.toggleDownloadIcon = !!this.selection.selected.length;
  }
  /**
   * @ignore
   * The label for the checkbox on the passed row
   */
  checkboxLabel(row?: Transaction): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.amount + 1}`;
  }
  /**
   * @ignore
   * Whether the number of selected elements matches the total number of rows.
   */
  private isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  /**
   * @ignore
   * This method gets called after angular fully initialized the component's view
   */
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
