import express from 'express'





const app = express()

app.get('/usuarios', (req, res) => {

    res.send('Olá seja bem vindo')
})

app.post('/usuarios', (req, res) => {

    res.send('joia')
})




app.listen(3000)