const express = require ('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose')
require('dotenv').config()

const app = express();

// connect to db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB connected'))
    .catch(err => console.log('DB CONNECTION ERROR: ', err));

//importar rutas
const authRoutes = require('./routes/auth');

// app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

if ((process.env.NODE_ENV = 'development'))
 app.use(cors({ origin : `http://localhost:3000`}));


//middleware
app.use('/api',authRoutes);

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
console.log(`server is listening at port ${PORT} `)
})