const express = require('express')
const app = express()

const path= require('path')
app.set('veiw engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req,res) => {
	res.send('test')
})

app.listen(3001, () => {
	console.log('example app is started at http://localhost:3001')
})