import express from "express";
import cors from "cors";
import { samples, sampleTags, sampleUsers } from "./data";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/foods", (req, res) => {
    res.send(samples);
})

app.get("/api/foods/search/:searchTerm", (req, res) => {
  const searchTerm  = req.params.searchTerm;
  const foods = samples
  .filter(food => food.name.toLowerCase()
  .includes(searchTerm.toLowerCase()));
  res.send(foods);
})

app.get("/api/foods/tags", (req, res) => {
  res.send(sampleTags);
})

app.get("/api/foods/tag/:tagName", (req, res) => {
  const tagName = req.params.tagName;
  const foods = samples
  .filter(food => food.tags?.includes(tagName));
  res.send(foods);
})

app.get("/api/foods/:foodId", (req, res) => {
  const foodId = req.params.foodId;
  const food = samples.find(food => food.id == foodId);
  res.send(food);
})

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})

app.post("/api/users/login", (req, res) => {
  const {email, password} = req.body;
  const user = sampleUsers.find(user => user.email === email 
    && user.password === password);

   if(user) {
    res.send(generateTokenReponse(user));
   }
   else{
     const BAD_REQUEST = 400;
     res.status(BAD_REQUEST).send("Username or password is invalid!");
   }

})

const generateTokenReponse = (user:any)=>{
  const token = jwt.sign({
    email:user["email"],
    isAdmin:user["isAdmin"]
  },
  "Text",
  {
    expiresIn:"1d"
  })
  
  user.token = token;
  return user;
}