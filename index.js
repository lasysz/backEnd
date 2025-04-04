const primeiro = require('express')
const copycopy = require('cors')

const uau = primeiro()
uau.use(copycopy())

uau.get('/hellokitty',(req,res)=>{
    res.send([
        {nome:"teste", rgm:"123", curso:"ADS"},
        {nome:"testeDOIS", rgm:"321", curso:"ADM"}
    ])
})

uau.listen(3080, ()=>{
    console.log('sanrio')
})