const express = require('express')
const helmet = require('helmet')
const compression = require('compression')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const app = express()

require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@clusterperso.nnlft.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(helmet())
app.use(bodyParser.json())
app.use(compression())
require('./routes')(app);

app.listen(process.env.PORT, () => console.log(`App listening at http://localhost:${process.env.PORT}`))
