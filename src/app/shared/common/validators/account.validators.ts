import { AbstractControl } from "@angular/forms";

/**
 * @ignore
 * Synchronization validators for form controls.
 */
export class Account {
  static AccountNumberValidator(control: AbstractControl) {
    const accountNumber = control.value;
    return Account.getResult('accountNumber', accountNumber);
  }
  static BranchCodeValidator(control: AbstractControl) {
    const branchCode = control.value;
    return Account.getResult('branchCode', branchCode);
  }
  /**
   * @ignore
   * Helper method
   */
  private static getResult(source: string, controlValue: any) {
    const regExp1 = /^[0-9]+$/; // alphanumeric test
    const reqExp2 = source === 'accountNumber' ? /^.{8}$/ : /^.{5}$/; // max length test
    if (controlValue) {
      const alphanumeric = regExp1.test(controlValue);
      const lenght = reqExp2.test(controlValue);
      if (!alphanumeric) {
        return { patternError: true }
      } else if (!lenght) {
        return { lengthError: true }
      }
    }
    return null;
  }
}


