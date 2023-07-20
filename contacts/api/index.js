const express = require('express'),
    app = express()

const db = require('./db'),
    contactsRoutes = require('./controllers/contacts.controller')

const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.json())
app.use('/api/contacts', contactsRoutes)


app.use((err, req,res,next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
})

db.query("SELECT 1")
    .then(() => { 
        console.log('db connection success!')
        app.listen(3000,
            () => console.log('server started at 3000'))
    })
    .catch(err=>console.log('connection failed. \n' + err))
