const person = {
  name: 'Сергей',
  sayHi: function() {
    return `Привет, ${this.name}!`;
  }
}

person.name;
person.sayHi();

person.name = 'Руслан'
person.sayHi();
