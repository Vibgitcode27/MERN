// *****
// *   *
// *   *
// *   *
// *****

// *****
// *   *
// *   *
// *   *
// *****

let pat = ""
for(let i = 0; i < 5 ; i++)
{
    for(let j = 0; j < 5 ; j++)
    {
        if(i === 0 || i === 4)
        {
          pat = pat + "*"
        }
    else
      {  
          if(j === 0 || j === 4)
          {
            pat = pat + "*"
          }
          else
          {
            pat = pat + " "
          }
      } 
    }   
    pat = pat + "\n"
}

console.log(pat)