import { AbstractControl } from "@angular/forms"

/**
 * @ignore
 * Synchronization validator for cell number
 */
export class Contact {
  static CellValidator(control: AbstractControl) {
    const cellNumber = control.value;
    if (cellNumber) {
      const regExp1 = /^[0-9]+$/; // alphanumeric test
      const regExp2 = /^.{10}$/; // length test
      const alphanumeric = regExp1.test(cellNumber);
      const lenght = regExp2.test(cellNumber);
      if (!alphanumeric) {
        return { patternError: true }
      } else if (!lenght) {
        return { lengthError: true }
      }
    }
    return null;
  }
}
