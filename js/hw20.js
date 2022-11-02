class Human {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  logInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }
}

class Auto {
  make;
  model;
  year;
  plate;
  newOwner;
  constructor(make, model, year, plate) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.plate = plate;
  }
  owner(owner) {
    if (owner.age >= 18) {
      this.newOwner = owner;
    } else {
      console.warn("The person is under 18!");
    }
  }
    getInfo() {
      if (this.newOwner != null) {
        this.newOwner.logInfo();
      } else {
          console.warn("This auto does not have an owner.");
      }
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Plate: ${this.plate}`);
  }
}

const lana = new Human("Lana", "25");
const roma = new Human("Roma", "17");

const auto1 = new Auto("BMW", "X6 (G06)", "2019", "BI 1248 BA");
const auto2 = new Auto("BMW", "X6 (G06)", "2020", "BI 1250 BA");

auto1.owner(lana);
auto2.owner(roma);