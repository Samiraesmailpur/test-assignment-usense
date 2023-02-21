import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  password = '';

  constructor() {}

  /*
  @argument password - string with password

  This method will return password strength value in nummeric type
  -1 - password is less than 8 characters 
  0 - no password
  1 - easy password rules
  2 - medium password rules
  3 - strong password rules


  How to calculate the strength of a password:
  Only letters/digits/symbols - the password is easy;
  Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;
  Has letters, symbols and numbers - the password is strong;

  The color of the sections will depend on the strength of the password:
  If the field is empty, all sections are gray;
  If the field has less than 8 characters, all sections are red;
  If the password is easy - the first section is red the rest are gray;
  If the password is medium - the first two sections are yellow the last one is gray;
  If the password is strong, all sections are green;



  */
  getStrengthValue() {
    let hasLetters,
      hasDigits,
      hasSymbols = false;

    hasLetters = /[a-zA-Z]/g.test(this.password);
    hasDigits = /[0-9]/g.test(this.password);
    hasSymbols = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/g.test(this.password);
    if (this.password.length < 8 && this.password.length > 0) {
      return -1;
    }

    return +hasLetters + +hasDigits + +hasSymbols;
  }
}
