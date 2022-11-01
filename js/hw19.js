class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Flat {
  residentsArray = [];
  addResidents(resident) {
    this.residentsArray.push(resident);
  }
}

class Building {
  flatsArray = [];
  maxFlatsNumber = 0;
  constructor(number) {
    this.maxFlatsNumber = number;
  }
  addFlats(flat) {
    if (this.flatsArray.length < this.maxFlatsNumber) {
      this.flatsArray.push(flat);
    } else {
      console.warn(
        "The number of flat in the building has reached its maximum."
      );
    }
  }
}

const lena = new Human("Lena", "female");
const vania = new Human("Vania", "male");
const olia = new Human("Olia", "female");
const vasia = new Human("Vasia", "male");
const katia = new Human("Katia", "female");
const liosha = new Human("Liosha", "male");

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();

flat1.addResidents(lena);
flat1.addResidents(vania);
flat2.addResidents(olia);
flat2.addResidents(vasia);
flat3.addResidents(katia);
flat3.addResidents(liosha);

const building1 = new Building(2);

building1.addFlats(flat1);
building1.addFlats(flat2);
building1.addFlats(flat3);
