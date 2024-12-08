const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.use('/Public',express.static('Public'))

app.get('/',(req, res)=>{
    res.send('Hello')
})

app.listen(port,()=>{
    console.log(`File is served in the ${port}`)
})