//console.log(__dirname);
//console.log(__filename);
const myName = 'saad';
const john = 'john';
const sayHi = (name) => console.log(`hello ${name}`);

function firstTask() {
    console.log('task 1');
    setTimeout(() => console.log('task 2'), 1000);
    console.log('task 3');
}
firstTask();
console.log('task 4')

function taskTwo() {
    for (let i = 0; i < 10; i++) {
        console.log(`${i}`);
    }
}
taskTwo()

module.exports = sayHi;
//console.log(module);
