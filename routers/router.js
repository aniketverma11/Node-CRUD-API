const express = require('express')
const router = express.Router()
const App = require('../models/models')

router.get('/', async(req, res) => {
    try{
        const app = await App.find()
        res.json(app)
    }catch(err){
        res.send("error" + err)
    }
})

router.post('/', async(req, res) => {
    const app = new App({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 = await app.save()
        res.json(a1)
    }catch(err){
        res.send('error')
    }
})

module.exports = router