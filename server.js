import express from 'express'
import { PrismaClient } from './generated/Prisma/Client.js'





const app = express()
app.use(express.json())



const prisma = new PrismaClient();


app.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {
 
  const user = await prisma.user.create({
        data: {

            email: req.body.email,
            name: req.body.name,
            age: req.body.age

        }
    })

    console.log(user)


    res.status(201).json(user)
})




app.listen(3000)