//     *
//    **
//   ***
//  ****
// *****

let pat = ""
for(let i = 0; i < 5 ; i++)
{
    for(let j = 0; j < 5 ; j++)
    {
        if(j < 5 - i - 1 )
        {
          pat = pat + " "
        }
      else
        {
          pat = pat + "*"
        }
    }   
    pat = pat + "\n"
}

console.log(pat)