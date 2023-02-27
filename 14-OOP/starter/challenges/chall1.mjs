export function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  return this.speed;
};

Car.prototype.brake = function () {
  this.speed -= 5;
  return this.speed;
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
// console.log(car1.accelerate());
// console.log(car2.accelerate());
// console.log(car1.brake());
// console.log(car2.brake());

// console.log(car1.price());
// console.log(car2.price());

// console.log(car1);
// console.log(car2);
