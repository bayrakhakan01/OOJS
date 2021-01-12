/*
function createNewPerson(name) {
    const obj = {};
    obj.name =name;
    obj.greeting = function() {
        alert('Hi! I\'m ' + obj.name + '.');
    };
    return obj;
}
*/
/*
function Person(name) {
    this.name = name;
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name + '.');
    };
  }
*/

function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    let heShe;
    if (this.gender === 'male') {
        heShe = 'He'
    } else {
        heShe = 'She'
    }
    this.bio = function() {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. '+ heShe +' likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
      };
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name.first + '.');
    };
};

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
let person2 = new Person('Ola', 'Smith', 32, 'female', ['music', 'skiing']);