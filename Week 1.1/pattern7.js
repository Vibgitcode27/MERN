// *********
//  *******
//   *****
//    ***
//     *

let pat = "";
for (let i = 1; i <= 5; i++) 
{
  for (let j = 1; j <= i; j++)
  {
    pat += " ";
  }
  for (let k = 0; k < 2 * (6 - i) - 1; k++)
  {
    pat += "*";
  }
  pat += "\n";
}
console.log(pat);