// Prototypes:as "Classes"

function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("sarfraj");
var reactJS = new Workshop("asif");

deepJS.ask("Is 'prototype' a class?");
deepJS.ask("Isn't 'prototype' ugly?");


// prototype chain

function Workshop(teacher){
    this.teacher = teacher;

}

Workshop.prototype.ask = function(question){
    console.log(this.teacher,question);
}
var deepJS = new Workshop('Sarfraj');

// Prototypes: shadowing
 deepJS.ask =  function(question){
    // this.ask(question.toUpperCase())
    this.__proto__.ask.call(this,question.toUpperCase())
 }
//  deepJS.ask('Oops,is this infinite recursion?')
 deepJS.ask('Is this fake polymorphism?')


console.log(deepJS.constructor === Workshop);
console.log(deepJS.__proto__ === Workshop.prototype);
console.log(Object.getPrototypeOf(deepJS) === Workshop.prototype);


