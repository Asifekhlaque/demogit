
const str= "there_are some people peeing outside on the road";
console.log(str)

let str1 = str.toUpperCase();
console.log(str1);

let str2= str.toLowerCase();
console.log(str2);

let str3 = str.split(" ");
console.log(str3);

const arr = str.split(" ");


console.log("this is the new array formed");
console.log(arr);


//important method to reverse the string
let str4 = str.split(" ").reverse().join(" ");
console.log(str4);

let str5 = str.replace("peeing", "pee");
console.log(str5);

let str6 = str.indexOf("on");
console.log(str6);

let str7 = str.lastIndexOf("on");
console.log(str7);
let str01
str01= str.search("on");
console.log(str01);

let str8 = str.slice(0, 5);
console.log(str8);
let str9 = str.slice(-6);
console.log(str9);
let str10 = str.slice(-16,-11);
console.log(str10);

console.log(arr[3])

