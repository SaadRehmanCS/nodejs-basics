const arr = [{name: 'saad', age: '20'}
, {name: 'bully', age: '19'}];

const copy = arr;
//console.log(copy);

const spr = [...arr, {name: 'newName'}];
//console.log(spr);

arr[0].name = 'notthatname';

//console.log(copy);
//console.log(spr);



const obj = {name: 'saad', age: '20'};
const ssj = 'this is it';
const newObj = { ...obj, newname: `${ssj}` };
console.log(obj);
console.log(newObj);