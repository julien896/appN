const express = require ('express')

const app = express()

//importar rutas
const authRoutes = require('./routes/auth')

//middleware
app.use('/api' , authRoutes)

const port = process.env.port || 4000
app.listen(port, () => {
console.log(`server is listening at port ${port}`)
})