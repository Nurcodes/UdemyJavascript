'use strict';
// /**
//  * OOP
//  * Prototypal inheritance
//  * The prototype contains methods that
//  * are accessible to all objects linked to that prototype
//  *
//  * Behavior is delagated to the linked prototype object
//  */
// /**
//  * Different from classical OOP inheritance in that
//  * its not a class inheriting from another class
//  * but an instance inheriting from a prototype class
//  */

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2037 - birthYear);
  // };
};

// const jonas = new Person('Jonas', 1991);
// // console.log(jonas);
// // jonas.calcAge();
// // console.log(jonas instanceof Person);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically returns {...}

// // Prototypes
// // console.log(Person.prototype === jonas.__proto__);
// // console.log(Person.prototype.isPrototypeOf(jonas));
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
// Person.prototype.code = true;
// jonas.calcAge();
// // console.log(jonas.__proto__);
// // console.log(jonas.hasOwnProperty('firstName'));
// console.log(Person.prototype);
// console.dir(Person.prototype.constructor);

//Classes
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  get greet() {
    return 'Hello ' + this.firstName;
  }
}

const jessica = new PersonCl('Jessica', 1996);
// console.log(jessica);
// console.log(jessica.greet);

//* THIS IS USING OBJECT.CREATE

const PersonProto = {
  calcAge() {
    return 2100 - this.birthYear;
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.birthYear = 2000;
// console.log(steven.calcAge());
// console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
// console.log(sarah);
sarah.init('sarah', 2000);
// console.log(sarah);

//* CONSTRUCTOR INHERETANCE

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');
// console.dir(mike instanceof Student);
// console.dir(mike instanceof Person);
// Student.prototype.constructor = Student;
// // mike.introduce();

// try {
//   mike.calcAge();
// } catch (e) {
//   console.log(`[ERROR] ${e}`);
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(`New calcAge method Age is: ${2100 - this.birthYear}`);
//   }
// }

// const martha = new StudentCl('Marth Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// const jay = Object.create(StudentProto);
// jay.init('jay', 2000, 'cs');
// console.log(jay.calcAge());

//* 1) Public fields
//* 2) Private fields
//* 3) Public Methods
//* 4) Private Methods
//* (There is also the static version of all four)

class Account {
  //^Public field (instances)
  locale = navigator.language;

  //&Private fields (instances)
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //^ Protected property
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thank you for opening an account ${owner}`);
  }

  //^ 3) Public methods
  //& Public interface
  getMovements() {
    return this.#movements;
  }
  deposit(value) {
    this.#movements.push(value);
    return this;
  }

  //& Abstracts away that the deposit is actaully a negative value
  withdrawl(value) {
    this.deposit(-value);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.#movements.push(val);
      console.log('approved');
    }
    return this;
  }

  // 4) Private methods
  _approveLoan(val) {
    return true;
  }

  static helper() {
    console.log('helper static');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
const acc2 = new Account('Mark', 'USD', 2222);
console.log(
  acc1
    .deposit(500)
    .deposit(900)
    .withdrawl(100)
    .requestLoan(20000)
    .withdrawl(7500)
    .getMovements()
);
console.log(acc1);
