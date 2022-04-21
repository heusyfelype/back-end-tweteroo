import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

let user = [];

app.post("/sign-up", (req, res) =>{
    user.push(req.query);
    console.log(user)
    res.send("Deu tudo certo")
});


app.listen(5000);