import { calculadora } from 'calculadora-app'; 
import { Router } from 'express'


const calculadoraRouter = Router();

calculadoraRouter.post('/sum', (req, res)=> {
    const { num1, num2 } = req.body

    const resultado = calculadora.sum(num1, num2)

    res.send({ status: 'succes', result: resultado })
})

calculadoraRouter.post('/div', (req, res)=> {
    try{
        const { num1, num2 } = req.body
        const resultado = calculadora.divide(num1, num2)
        res.send({ status: 'succes', result: resultado })
    }catch (error){
        res.status(400).send({ error: error })
    }
})

export default calculadoraRouter;