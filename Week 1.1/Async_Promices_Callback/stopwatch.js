let a = prompt("Enter stop time in sec")
let j = 1
for (let index = 0; index < a; index++) 
{
    setTimeout(() => 
    {
       console.log(j++) 
    }, 5000);
}