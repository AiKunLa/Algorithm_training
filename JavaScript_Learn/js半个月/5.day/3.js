let person = {
  name: "John",
  age: 30,
  city: "New York",
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

person.name = 'ggg'
person.age = 20
person.city = 'beijing'
person.sayHello = function() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
}

console.log(person.name); // Output: John
console.log(person.age); // Output: 30
person.sayHello(); // Output: Hello, my name is John and I am 30 years old.

let person2 = {
  'good-morning': 'hello', // 键名包含特殊字符，需要使用引号括起来
  name: "John",
  age: 30,
  city: "New York",
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};
console.log(person2['good-morning']);// hello
console.log(person2['name']); // John
console.log(person2['age']); // 30
person2['sayHello'](); // Hello, my name is John and I am 30 years old.

console.log('******************************************')

// 遍历对象
for (let key in person2) {// key 是string类型的，所以必须使用person2[key]来访问值
  console.log(key, person2[key]); // 输出键和对应的值
}