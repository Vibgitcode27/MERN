let a = prompt("prompt a number");
let b = 0;
console.log(b)
let c = 1
console.log(c)
let next = b + c;
console.log(next)
for (let i = 0 ; i < a-2 ; i++) {
    b = next + c
    console.log(b)
    c = next 
    next = b
}