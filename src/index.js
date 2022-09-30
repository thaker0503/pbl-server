const express = require('express');
const PORT = 3000;
const cors = require('cors');
const check = require('./checkwebsite')
const serverless = require("serverless-http");
const app = express();
const router = express.Router();


app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

router.get("/", (req, res) => {
    res.render("index.ejs");
    res.end()
})

router.post("/", (req, res) => {
    async function checkwebsite() {
        await check.website(req.body.url)
        res.end()
    }
    checkwebsite()
})

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
})

app.use(`/api`, router);

module.exports = app;
module.exports.handler = serverless(app);