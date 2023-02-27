class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
  }

  brake() {
    this.speed -= 5;
  }

  get speedUS() {
    return this.speed / 1.6 + 'm/h';
  }

  set speedUS(s) {
    (this.speed = s * 1.6) + 'km/h';
  }
}

const ford = new Car('ford', 120);
console.log(ford);

ford.speedUS = 150;
console.log(ford);
console.log(ford.speedUS);
console.log('120km/h' / 1.6);
