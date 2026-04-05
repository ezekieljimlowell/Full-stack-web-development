import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send(200)
})

app.post("/registration", (req, res) => {
    res.send(201)
})

app.put("/user/ezekiel", (req, res) => {
    res.send(200)
})

app.patch("/user/ezekiel", (req, res) => {
    res.send(200)
})

app.delete("/user/ezekiel", (req, res) => {
    res.send(200)
})

app.listen(port, () => {
    console.log('Server running on ' + port)
})
