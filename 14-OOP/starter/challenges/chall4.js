class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed--;
    console.log(
      `${this.make} has pressed the brake and is now at ${this.speed} km/h`
    );
    return this;
  }
}

class EVCl extends CarCl {
  #_charge;
  honk = 'HONK!';

  constructor(make, speed, charge) {
    super(make, speed);
    this.#_charge = charge;
  }

  accelerate() {
    this.#_charge--;
    super.accelerate();
    return this;
  }

  get charge() {
    return this.#_charge;
  }

  set charge(val) {
    if (val > 100) val = 50;
    this.#_charge = val;
  }

  chargeBattery(val) {
    if (val < 0 || val > 100) return this;
    if (this.#_charge === 100) {
      console.log(`Your ${this.make} is fully charged to ${this.#_charge}!`);
      return this;
    }
    console.log(`Charging ${this.make} to ${val}....`);
    this.#_charge = val;
    return;
  }

  #honk() {
    console.log(`${this.make} is HONKING!!`);
  }

  brake() {
    super.brake();
    this.#honk();
    return this;
  }
}

const ev1 = new EVCl('Rivian', 120, 100);
ev1.charge = 102;
console.log(ev1);
ev1.accelerate().brake().accelerate().brake().chargeBattery(12);
console.log(ev1.charge);
