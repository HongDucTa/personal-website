const express = require('express')
const helmet = require('helmet')
const compression = require('compression')
const bodyParser = require('body-parser')

const config = require('./config/setup.json')
const db = require('./config/db.json')

const mongoose = require('mongoose')
const app = express()

mongoose.connect(`mongodb+srv://${db.user}:${db.password}@clusterperso.nnlft.mongodb.net/${db.dbName}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(helmet())
app.use(bodyParser.json())
app.use(compression())
require('./routes')(app);

app.listen(config.PORT, () => console.log(`App listening at http://localhost:${config.PORT}`))
