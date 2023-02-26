import express from 'express'
import test from '../controllers/test.js'
const router=express.Router()
router.get('/',(req,res)=>{
    const obj=test()
    res.send(obj)
})

export default router