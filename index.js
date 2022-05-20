const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/COMP229', (req, res) => {
    res.send('This course is hard but I will try my best!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})