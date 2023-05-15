class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce() {
    return `Hi, I'm ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`;
  }
  static introducePeople(people) {
    if (!Array.isArray(people)) {
      console.log('introducePeople only takes an array as an argument.');
      return;
    }
    for (const person of people) {
      if (!(person instanceof Person)) {
        console.log('All items in array must be Person class instances.');
        return;
      }
    }
    const introductions = people.map(person => person.introduce());
    console.log(introductions);
  }
 }
 const newGuy = new Person('John', 'Doe', '26');
 const myself = new Person('Mark', 'Garcia', '24');
 const invalidPerson = {};
 Person.introducePeople([newGuy, myself]);
/****************************************************************************/
