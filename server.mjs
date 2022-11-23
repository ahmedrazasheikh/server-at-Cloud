console.log("I am server file");

import express from 'express';
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    console.log("request ip: ", req.ip);
    res.send('Ahmed Raza Jafri' + new Date().toString());
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})