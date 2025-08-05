/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript Mocha/Chai
  FE JS6 Lab
*/
const expect = chai.expect
const assert = chai.assert

/* ----------------------------------------------------- */
// Resources:
// expect Documentation: https://www.chaijs.com/api/bdd/
// assert Documntation: https://www.chaijs.com/api/assert/
//
// assert is very similar to how you use expect, but offers
// extra ways to test.

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 *          YOU MUST 'npm install' IN YOUR TERMINAL TO INSTALL MOCHA/CHAI 
 *          FROM THE DEPENDENCIES IN YOUR PACKAGE.JSON
 * 
 *  Step 1: Create a describe code block that describes what you expect the code to do.
 *  Step 2: Copy/Paste your debugged code from JS6Lab.js into the describe block (exclude the final console.log())
 *  Step 3: Create tests using expect/assert to test for expected outputs. Use multiple cases.
 *          If you're testing against an array/object - read the documentation on .deep/.deepEquals
 *
 *  Note:   Mocha/Chai is currently set up to only run in your given index.html. 
 *          expect/assert are given to you at the top of the code. 
 * 
 *          By default, the tests will pass unless you give it code to test against.
 * 
/*--------------------------------------------------------------------*/

describe('JS6 Lab Tests:', () => {
  describe('Example Question Test: Add Two Numbers', () => {
    it('#Should return the sum of two numbers', () => {
      // Copy & paste your debugged code from JS6Lab.js
      function addTwoNumbers(num1, num2) {
        return num1 + num2
      }
      // Write tests to ensure it works for multiple examples
      expect(addTwoNumbers(2, 3)).to.equal(5)
      expect(addTwoNumbers(9, 17)).to.equal(26)
      expect(addTwoNumbers(750, 250)).to.equal(1000)
      expect(addTwoNumbers(132780, 443378)).to.equal(576158)
    })

    describe('Example Failed Test: Add Two Numbers', () => {
      it('#Should fail', () => {
        function sumOfTwoNumbers(num1, num2) {
          num1 + num2
        }

        expect(sumOfTwoNumbers(2, 3)).to.equal(5)
      })
    })
  })
  /*--------------------------NEW TESTS BELOW-------------------------------*/
})

describe('Question 1a: Sorted array of numbers: sort numbers in ascending order', () => {
  it('#should return an array with numbers in ascending order', () => {

     let arrayOfNumbers = [1, 5, 3, 2, 4]
      arrayOfNumbers = arrayOfNumbers.sort((a, b) => a - b)

      expect(arrayOfNumbers).to.deep.equal([1, 2, 3, 4, 5])

  })

})

describe('Question 1b: Manage my wallet', () => {
  
class Wallet {
  constructor(startingMoney) {
    this.money = startingMoney
  }

  addMoney(amount) {
    this.money += amount
  }
  
removeMoney(amount) {
  this.money -= amount
}
}
it('should add money to my wallet', () => {


let myWallet = new Wallet(20)
myWallet.addMoney(3)

expect(myWallet.money).to.equal(23)

})


it('should remove money from my wallet', () =>{

  let myWallet = new Wallet(20)
  myWallet.removeMoney(10)

  expect(myWallet.money).to.equal(10)
})

})

describe('Question 1c: Day of the week', () => {
  
let dayOfTheWeek = (num) => {
  switch (num) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
      
    case 3:
      return 'Wednesday';

    case 4:
      return 'Thursday';

    case 5:
     return 'Friday';

    case 6:
     return 'Saturday';

    case 7:
      return 'Sunday';
    default:
      console.log('Err. Something went wrong.');
  }

}
  it('should print the day of the week to console for 1-7 and error for other', () => {
  expect(dayOfTheWeek(1)).to.equal('Monday')
  expect(dayOfTheWeek(2)).to.equal('Tuesday')
  expect(dayOfTheWeek(3)).to.equal('Wednesday')
  expect(dayOfTheWeek(4)).to.equal('Thursday')
  expect(dayOfTheWeek(5)).to.equal('Friday')
  expect(dayOfTheWeek(6)).to.equal('Saturday')
  expect(dayOfTheWeek(7)).to.equal('Sunday')
})

})

describe('Question 1d: Only Wizards Shall Pass', () =>{

  const movieCharacters = [
  {
    name: 'Howl',
    isAWizard: true,
    quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
  },
  {
    name: 'Kalcifer',
    isAWizard: false,
    quote: `I don't cook! I'm a scary and powerful fire demon!`,
  },
  {
    name: 'Gandalf',
    isAWizard: true,
    quote: `You shall not pass!`,
  },
  {
    name: 'Luke Skywalker',
    isAWizard: false,
    quote: `May the Force be with you.`,
  },
]

function onlyWizards(arrayOfCharacters) {
  return arrayOfCharacters.filter((character) => character.isAWizard == true)
  
}
it('#should print an array of objects in which isAWizard is true', () =>{
  expect(onlyWizards(movieCharacters)).to.deep.equal([
      {
    name: 'Howl',
    isAWizard: true,
    quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
  },
    {
    name: 'Gandalf',
    isAWizard: true,
    quote: `You shall not pass!`,
  }

  ])


})

})

