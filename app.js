//Library land

const uid = Symbol('uid');
console.log(uid);

const user = {
  // id: 'p1',
  [uid]: 'p1',
  name: 'Max',
  age: 30,
  [Symbol.toStringTag]: 'User Object'
};

user[uid] = 'p3';

//App land => Using the library

user.id = 'p2'; //this should not be possible

console.log(user[Symbol('uid')]);

console.log(Symbol('uid') === Symbol('uid'));

console.log(user.toString());