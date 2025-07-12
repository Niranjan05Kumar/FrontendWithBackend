import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("This is Home page");
});

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Programming Joke",
            content: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
            id: 2,
            title: "Coffee Joke",
            content: "How do you comfort a JavaScript bug? You console it!"
        },
        {
            id: 3,
            title: "Array Joke",
            content: "Why did the developer go broke? Because he used up all his cache!"
        },
        {
            id: 4,
            title: "Loop Joke",
            content: "There are only 10 types of people in the world: those who understand binary and those who don't."
        },
        {
            id: 5,
            title: "Database Joke",
            content: "Why do Java developers wear glasses? Because they don't C#!"
        }
    ]
    res.send(jokes)
})


app.listen(port)
