import { Car } from './chall1.mjs';

function EV(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

//* Instansiate a new EV object

//* Link the prototypes
EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;
//* Begin making the methods after linking prototypes
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;

  console.log(
    `${this.make} going at ${this.speed} km/h with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 90, 50);

console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(5);
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.brake();
console.log(tesla);
console.dir(EV.prototype);
console.dir(Car.prototype);
console.dir(Car.prototype === tesla.__proto__);
