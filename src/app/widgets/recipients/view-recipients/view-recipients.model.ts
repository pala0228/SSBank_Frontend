
/**
 * @ignore
 * Model for transaction made
 */
export interface Transaction {
  date: string;
  amount: number;
  paymentReferenceNumber: number;
  yourReference: string;
  theirReference: string;
  fromAccount: string;
  toAccount: string;
}
/**
 * @ignore
 * Model for Recipient
 */
export interface Recipient {
  recipientId: string;
  recipientName: {
    firstName: string;
    lastName: string
  };
  account: {
    accountNumber: string;
    branchCode: string;
    branchName: string
  },
  contact: {
    cellNumber: string;
    emailId: string;
  },
  yourReference: string;
  theirReference: string;
};
