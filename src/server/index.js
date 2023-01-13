const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors()) // 處理跨網域

const money = require('./controller/money.js')
app.use('/money', money)


app.listen(9527, () => {
  console.log('Example app listening on port 9527!')
})
  