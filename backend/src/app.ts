import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to School Maps API");
});

export default app; 