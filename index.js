import express from "express";

const app = express();
const port = 5500;

app.use("/", (req, res) => {
    res.json({ massage: "Hello Express Vercel App" });
});

app.listen(5500, () => {
    console.log(`start vercel server ${port}`);
});