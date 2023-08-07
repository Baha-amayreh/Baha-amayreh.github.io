

// window.onload = load;
// function f1() {
//     const x = parseFloat(document.getElementById("txt1").value);
//     const y = parseFloat(document.getElementById("txt2").value);
//     const h2 = document.getElementById('h2');
//     h2.innerHTML = x + y;
//     return [x, y];
// }

// function f2() {
//     alert(document.getElementById('s1').value);
// }

// function load() {
//     document.getElementById('btn1').onclick = f1;
//     document.getElementById('s1').onchange = f2;
// }
// // let t1;
// // for (let i = 0; i < 5; i++) {
// //     t1 = setTimeout(() => { console.log("i=", i); }, 1)
// // };
// function func(a, b) { return a * b; }
// function apply(func, a, b) {
//     return func(a, b);
// }
// console.log(apply(func, 4, 3));

// console.log('------------------------');
// (function func1() {
//     w = 1;//global variable 
//     var x = 2;
//     const y = 3;
//     let z = 4;
//     console.log(w, x, y, z);
// })();
// let z;
// if (typeof (w) !== 'undefined')
//     console.log(w);
// if (typeof (x) !== 'undefined')
//     console.log(x);
// if (typeof (y) !== 'undefined')
//     console.log(y);
// if (typeof (z) !== 'undefined')
//     console.log(z);
// console.log(z);


// console.log('-----------main-------------');
// var x = 10;
// function main() {
//     console.log("in main: " + x);  //preview of hoisting
//     x = 20;
//     console.log("in main part 2: " + x);
//     if (x > 0) {
//         var x = 30;
//         console.log("in x>0: " + x);
//     }
//     var x = 40;
//     var f = function (x) {
//         console.log("in f: " + x);
//     }
//     f(50);
// }

// main();
// console.log('-----------course--------------');

// let course = 10;
// function study() {
//     console.log('course=' + course);
//     var course = 20;
//     console.log('course=' + course)
// };
// study();

// console.log('---------------------------------')

// const a = [1, 2, 3, 4, 5, 6, 7];
// const b = [...a, 1, 'a'];
// for (let item in b) {
//     console.log(b[item]);
// }

// const multi = (a, b) => a * b
// const f3 = u => u * 10 + 6
// console.log(multi(2, 5));
// console.log(f3(5));
// window.onload = load2;

// function f2() {
//     const size = parseInt(document.getElementById('s1').value);
//     (function () {
//         document.body.style.fontSize = size + 'px';
//     })();
// }
// function load2() {
//     document.getElementById('s1').onchange = f2;
// }

// const array = [1, 21, 3, 4, 5, 6, 7, 8, 9, 10];
// const array2 = array.map((item) => item * 2);
// const array3 = array.map(function multi(item) { return item * 3; });
// const array4 = array.map(function v(x) {
//     return x * 8;
// });
// const array5 = array.map(s => s * 5);
// console.log(array2);
// console.log(array3);
// console.log(array4);
// console.log(array5);

// const a = (a, b, ...others) => {
//     let sum = 0;
//     for (let i in others) {
//         sum += others[i];
//     }
//     return sum + a + b;
// }
// console.log('sum=' + a(1, 2, 6, 8, 9, 71, 12));
// const fil1 = array.filter(function f(item) {
//     return item % 2 == 0
// })

// const fil2 = array.filter(item => item % 2 == 0)
// console.log(fil1);
// const find1 = array.findIndex(x => x % 2 == 0);
// console.log(find1);

// console.log('max number is=' + max(1, 2, 3, 4, 5, 6, 122));
// console.log('min number is=' + min(1, 2, 3, 4, 5, 6, 122));
// console.log('max number is=' + max());
// function max(...arr) {
//     num = -Infinity;
//     for (i of arr) {
//         if (i > num) {
//             num = i;
//         }
//     }
//     return num;
// }
// function min(...arr) {
//     num = Infinity;
//     for (i of arr) {
//         if (i < num) {
//             num = i;
//         }
//     }
//     return num;
// }

const person = {
    name: 'Baha Amayreh',
    age: 0,
    phone: '641-2339979s',
    print: function () {
        console.log(this.name + ', age=' +
            this.age + ', phone=' + this.phone);
    },
};
console.log(person.name + ', age=' +
    person.age + ', phone=' + person.phone);
console.log(typeof (person) === 'object');
person.print();

console.log('------------------------------');
//let test = document.getElementById('baha');
test = $('#test');
console.log(test.value)
