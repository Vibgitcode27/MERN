let a = ""
for (let i = 0; i < 5; i++) 
{
    for (let j = 0; j < 5; j++)
    {
        if(i >= j)
        a = a + "*"
    } 
    a = a + "\n"
}

console.log(a)