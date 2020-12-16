const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.join(__dirname, '..', 'public')

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.use(express.static(publicPath))
app.listen(3000, () => { console.log('server is up!') })