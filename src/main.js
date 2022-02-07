import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


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