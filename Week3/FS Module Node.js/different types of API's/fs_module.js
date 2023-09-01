
// Prefer Promises Api for fs module

const fs = require("fs/promises");

// ****** Promise Api ****** //
let PRomise_API = async () => {
  try {
    await fs.copyFile('file.txt', 'copied_file.txt');
  } catch (error) {
    console.error(error)
  }
}
PRomise_API()


// ***** Callback Api ******* // 
const fs = require("fs")
fs.copyFile('file.txt', 'copied_file.txt' , (err) =>
{
    if(err) throw err;
});


// ***** Syncronous Api ******* //
const fs = require("fs")
fs.copyFileSync("file.txt" , "copied_file.txt")