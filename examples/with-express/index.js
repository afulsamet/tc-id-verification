const express = require('express')
const app = express()
const port = 3000

const { TCID } = require("../../dist")

app.get('/', (req, res) => res.send('The Republic of Turkey ID Verification with SOAP Client'))

// http://localhost:3000/verify?id=11223344556&fname=afulsamet&lname=doe&birth=2001
app.get('/verify', (req, res) => {
    const tcid = new TCID();
    tcid.verif({
        TCKimlikNo: req.query.id,
        Ad: req.query.fname,
        Soyad: req.query.lname,
        DogumYili: req.query.birth
    }, (err, result) => {
        res.send(result)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))