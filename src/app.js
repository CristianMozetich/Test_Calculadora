import express from 'express'
import calculadoraRouter from './Routes/calculadora.routes.js'

const app = express()
const PORT = 8080

//JSON settings:
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
app.use('/api/calculadora', calculadoraRouter)

app.listen(PORT, ()=> {
    console.log(`Server on port: ${PORT}`)
})

