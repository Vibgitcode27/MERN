let a = prompt("Enter stop time in sec")
let l = 1
for (let index = 0; index < a; index++) 
{
    setTimeout(() => {
       console.log(l++) 
    }, 1000);
}