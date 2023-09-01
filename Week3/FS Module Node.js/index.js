const fs = require("fs/promises")

let async_fn = async () => 
{
    const commandFilehandler = await fs.open("./command.txt" , "r") // "r" is a flag which means we are only going to read file
 
    let data = fs.watch("./");
    for await (const event of data)
    {
        if(event.eventType == "change" , event.filename == "command.txt")
        console.log("The file has changed")
    }
}   

async_fn()