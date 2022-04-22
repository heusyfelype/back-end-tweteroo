import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())

let user = [];
let tweets = [{
    username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub"
}, {
    username: "patrick",
    avatar: "https://upload.wikimedia.org/wikipedia/pt/b/b1/Patrick_Estrela.png",
    tweet: "aehoooooooooo"
}, {
    username: "lulamolusco",
    avatar: "https://pbs.twimg.com/media/DWr8g-FW0AY5Bsm.jpg",
    tweet: "eu odeio o hub"
}];

app.post("/sign-up", (req, res) => {
    user.push(req.body);
    res.send(req.body.username);
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
    
    res.send(tweetsToReturn)
})

app.post("/tweets", (req, res) =>{
    
    let user1 = user.filter((object) =>{ return object.username === req.body.username})

    let tweetToPost = {
        username: user1[0].username,
        avatar: user1[0].avatar,
        tweet: req.body.tweet
    };
    tweets = [...tweets, tweetToPost]
    res.send("Ok");
})


app.listen(5000);