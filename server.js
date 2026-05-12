import express from 'express'
import { PrismaClient} from './generated/Prisma/Client.js'





const app = express()
app.use(express.json())

const users = []

const prisma = new PrismaClient();


app.get('/usuarios', (req, res) => {

    res.status(200).json(users)
})

app.post('/usuarios', (req, res) => {

    users.push(req.body)

    res.status(201).json({
        message: 'Usuario criado com sucesso'
    })
})




app.listen(3000)