import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

let user = [];
let tweet = [];
let tweets = [{
    username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub"
}];

app.post("/sign-up", (req, res) => {
    user.push(req.query);
    console.log("Sign-up funcionando");
    res.send("Sign-up funcionando");
});

app.get("/tweets", (req, res) => {
    let tweetsToReturn = [];
    if(tweets.length <= 10){
        for(let i = tweets.length; i>0; i--){
            tweetsToReturn.push(tweets[i-1])
        }
    } else{
        for(let i = tweets.length; i > tweets.length - 10; i--){
            tweetsToReturn.push(tweets[i-1])
        }
    }
    
    console.log(tweetsToReturn, tweets.length)
    res.send(tweetsToReturn)
})


app.listen(5000);