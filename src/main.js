import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

// let testArr = [55, 55, 98, 465, 1, 2, 5, 8, 'string', 'bystring', 'anotherstring', null, undefined, NaN, 324]
// console.log(testArr);

// let obj = {
//     key: 'PIka',
//     secKey: 'Boo',
//     thrKey: ' ',
//     k4: ' is',
//     k5: ' a',
//     k6: true,
//     k7: 0,

//     set getMaxSeven(arr) {
//         Array.isArray(arr) ? this.k7 = Math.max(...arr) : null

//     },

// };

// obj.getMaxSeven = [1,2,3,4,5,6,7,8, 1234897, 99999999]
// console.log(obj.k7);

// fetch('https://boiling-refuge-66454.herokuapp.com/images')
//     .then(data => data.json())
//     .then(result => result.forEach(item => createImg(item)))

// function createImg(item) {
//     document.body.insertAdjacentHTML('beforeend', `
//         <img src="${item.url}">
//     `)
// }

function digital_root(n) {
    if(n < 10) return n
    return digital_root(n.toString().split('').reduce(((acc, item) => acc += +item), 0))
  }

digital_root(454)

function arrayDiff(a, b) {
    if(!b.length) {
        console.log('sdas');
        return a    
    } 
    let c = a.sort((a, b) => a-b)
    b.map(item => c.splice(c.indexOf(item), (c.lastIndexOf(item) - c.indexOf(item) + 1) ))
    console.log(c);
    return c
  }

//   arrayDiff([1,8,2,8,8,8,8,8,8,8,2,2,2,2,2,2], [2])
arrayDiff([16,5,10,-18,-12,3,3,0,-19,19,-13,13,18,8,-6],[13])

