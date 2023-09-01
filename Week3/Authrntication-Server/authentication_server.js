const express = require(`express`);
const app = express()
const bcrypt = require(`bcrypt`)
const port = 3000;

run = () =>
{
    console.log(`HTTP server running at port ${port}`)
}

app.listen(port , run)

let users = [] ;

app.use(express.json())

getUsers = (req ,res) =>
{
    res.json(users);
} 

app.get(`/users` , getUsers)

postSignUps = async (req ,res) =>
{
    try {
        const salt =  await bcrypt.genSalt();
        const hashed = await bcrypt.hash(req.body.password , salt)
        let user = {id : Math.floor(Math.random() * 10000) , name : req.body.name , password : hashed}
        console.log(hashed)
        users.push(user);
        res.status(201).send(user)
    }
    catch (error)
    {
        res.status(501).send("Cannot post")
    }
}

app.post(`/users/signup` , postSignUps)

postLogin = async (req ,res) =>
{
    const check = users.find(check => check.name == req.body.name)
    if(check == null)
    {
        res.status(404).send("Credentials are wrong")
    }
    else
    {
        try {
            if (await bcrypt.compare(req.body.password , check.password)) {
                res.status(200).send("You are logged in.")
            } else {
                res.status(404).send("Login Failed check credentials")
            }
        } 
        catch {
            res.status(501)
        }
    }
}

app.post(`/users/login` , postLogin)
