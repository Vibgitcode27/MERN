//     *
//    ***
//   *****
//  *******
// *********

let pat = "";
for (let i = 1; i <= 5; i++) 
{
  for (let j = 1; j <= 5 - i; j++)
  {
    pat += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++)
  {
    pat += "*";
  }
  pat += "\n";
}
console.log(pat);