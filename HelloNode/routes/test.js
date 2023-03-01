import express from 'express'
import test from '../controllers/test.js'
import query from '../controllers/query.js'
const router=express.Router()
router.get('/',(req,res)=>{
    const obj=query()
    res.send(obj)
})

export default router