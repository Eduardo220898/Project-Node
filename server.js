import express from 'express'





const app = express()

app.get('/usuarios', (req, res) => {

    res.send('Olá seja bem vindo' )
})




app.listen(3000)