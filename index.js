const userName = "Geoffrey";
console.log(userName);

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  printName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user = new User("Geoff", "Peel");
