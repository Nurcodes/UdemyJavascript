'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(-arr.length));

// //shallow copy
// console.log(arr.slice());

// //SPLICE
// //splice mutates an array and returns the deleted elements
// console.log(arr.splice(-1, 1, 'z'));
// console.log(arr);

// //REVERSE
// //mutates the array and returns reference to it
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr1.reverse();
// console.log(arr1);

// //CONCAT
// const letters = arr.concat(arr1);
// console.log(letters);
// //can also
// const destruct = [...arr.reverse(), ...arr1];
// console.log(destruct);
// //JOIN
// console.log(letters.join(' - '));

// //AT
// const newArr = [23, 11, 64];
// console.log(newArr[0]);
// console.log(newArr.at(0));

// console.log(newArr[newArr.length - 1]);
// //same as
// console.log(newArr.slice(-1)[0]);

// //so much easier now
// console.log(newArr.at(-1));

//ARRAY.FIND AND ARRAY.FINDINDEX
//Returns the item that first matches or index of item
// console.log(newArr.find(item => item === 11));
// console.log(newArr.findIndex(item => item === 11));

// //SAME AS FIND BUT RETURNS ARRAY OF MATCHING ITEMS
// console.log(...newArr.filter(item => item >= 12));

// const arrMap = newArr.map((item, idx) => {
//   return `${item}:${idx}`;
//   // return [item, idx];
// });
// console.log(arrMap);

//FOREACH METHOD, FUNDIMENTALLY DIFFERENT THAN FOR OF LOOP
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log('------ FOR OF ------');
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) console.log(`You deposited ${movement} at index ${i}`);
//   else {
//     console.log(`You withdrew ${Math.abs(movement)} at index ${i}`);
//   }
// }

// console.log('------ FOREACH ------');
// movements.forEach((item, idx) => {
//   let action = item > 0 ? 'deposited' : 'withdrew';
//   console.log(`You ${action} ${Math.abs(item)} at index ${idx}`);
// });

//custome indexOf method
// const indexCustom = (x, arr) => {
//   for (const [i, j] of arr.entries()) {
//     if (x === j) return i;
//     else {
//       continue;
//     }
//   }
//   return -1;
// };

// console.log(indexCustom(450, movements));

// const arrs = [arr1, movements];
// const mp = new Map([
//   [1, 2],
//   [4, 5],
// ]);

// mp.forEach((val, key) => {
//   console.log(`${key} holds value of ${val}`);
// });
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// console.log(currencies);
// currencies.forEach((val, key, map) => console.log(`${key}: ${val}`));

// const currenciesUnique = new Set(['USD', 'GPD', 'USD', 'EURO', 'YEN', 'EURO']);
// console.log('---------------------');
// console.log(currenciesUnique);
// currenciesUnique.forEach((val, _, map) => console.log(`${val}: ${val}`));
