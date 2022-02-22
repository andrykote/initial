import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

// let testArr = [55, 55, 98, 465, 1, 2, 5, 8, 'string', 'bystring', 'anotherstring', null, undefined, NaN, 324]
// console.log(testArr);



// function digital_root(n) {
//     if(n < 10) return n
//     return digital_root(n.toString().split('').reduce(((acc, item) => acc += +item), 0))
//   }


// function arrayDiff(a, b) {
//     if(!b.length) {
//         console.log('sdas');
//         return a    
//     } 
//     let c = a.sort((a, b) => a-b)
//     b.map(item => c.splice(c.indexOf(item), (c.lastIndexOf(item) - c.indexOf(item) + 1) ))
//     console.log(c);
//     return c
//   }


 // https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript


  // function likes(names) {
  //   let likeThis = "likes this";
  //   if (names.length === 0) return `no one ${likeThis}`;
  //   if (names.length === 1) return `${names[0]} ${likeThis} `;
  //   if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  //   if (names.length === 3)
  //     return `${names[0]}, ${names[1]} and ${names[2]} like this`;

  //   return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  // }


// https://www.codewars.com/kata/526571aae218b8ee490006f4/


  // var countBits = function(n) {
  //   let binary = (n).toString(2)
  //   return binary.split('').reduce((acc, item) => acc += +item , 0);
  // };


// https://www.codewars.com/kata/525f50e3b73515a6db000b83

//   function createPhoneNumber(numbers){
//     return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`;
//   }


// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

// function solution(str){
//   let result =[]
//   let splitString = str.split('');
//   if(splitString % 2 !== 0) splitString.push('_')
//   console.log(splitString);
//   for(let i = 1; i <= splitString.length -1; i += 2) {
//     result.push(splitString[i - 1]+splitString[i])
//   }
//   return result
// }