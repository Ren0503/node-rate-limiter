const express = require('express');
const app = express();
const router = express.Router();
const rateCheck = require('./ratelimiter');

router.get('/', (req, res) => {
    res.send("Hello World");
});

app.use(rateCheck);
app.use('/api',router);

app.listen(3000);