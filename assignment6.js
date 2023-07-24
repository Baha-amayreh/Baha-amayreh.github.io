console.log("----------Question1---------")
// Question 1
String.prototype.filter = function (text) {
    let words = this.split(" ");
    let filteredWords = words.filter(word => !text.includes(word));
    return filteredWords.join(" ");
};
console.log("This house is not nice!".filter(['not']));
console.log("----------Question2---------")
// ----------------------------------------------------------------------------
// Question 2
Array.prototype.bubbleSort = function () {
    const n = this.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                const temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
};

console.log("before sorting is:[6, 4, 0, 3, -2, 1]");
const arr = [6, 4, 0, 3, -2, 1].bubbleSort();
console.log("after sorting is:");
console.log(arr);
console.log("----------Question3---------")
// --------------------------------------------------------------------------------
//Question 3

function Person(name) {
    this.name = name;
}
function Teacher(name) {
    Person.call(this, name);
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
};
const teacher1 = new Teacher("Baha Amayreh");
teacher1.teach("Data Structures and Algorithms");

// part two of quetion 3
function createPerson(name) {
    return {
        name: name
    };
}
function createTeacher(name) {
    const teacher = Object.create(createPerson(name));
    teacher.teach = function (subject) {
        console.log(this.name + " is now teaching " + subject);
    };
    return teacher;
}
const teacher2 = createTeacher("Yousef Amayreh");
teacher2.teach("Arabic language");
console.log("----------Question4 part1---------")
// --------------------------------------------------------------------------------
//Question 4 part 1 
const PersonPrototype = {
    greeting: function () {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
    },
    salute: function () {
        console.log("Good morning!, and in case I don't see you, good afternoon, good evening, and good night!");
    }
};
const StudentPrototype = Object.create(PersonPrototype);
StudentPrototype.greeting = function () {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};
const ProfessorPrototype = Object.create(PersonPrototype);
ProfessorPrototype.greeting = function () {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

const person = {
    name: "Yousef",
    age: 65,
};

const student = Object.create(StudentPrototype);
student.name = "Yousef Baha";
student.age = 18;
student.major = "Computer Science";

const professor = Object.create(ProfessorPrototype);
professor.name = "Dr. Amayreh";
professor.age = 45;
professor.department = "Computer Science";
student.greeting();
student.salute();
professor.greeting();
professor.salute();

//part two of the question4
console.log("----------Question4 part2---------")
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greeting = function () {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.salute = function () {
    console.log("Good morning!, and in case I don't see you, good afternoon, good evening, and good night!");
};

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.greeting = function () {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};
function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.greeting = function () {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};
const student2 = new Student("Ali Ahmed", 20, "Computer Science");
const professor2 = new Professor("Dr. Amayreh", 45, "Computer Science");
student2.greeting();
student2.salute();
professor2.greeting();
professor2.salute();
