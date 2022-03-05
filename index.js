const connectToMongo = require('./db');
connectToMongo();
const express = require('express')
var cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json());

//availale routes:
app.use('/api/auth', require('./routes/auth'));
app.use('/api/bookings', require('./routes/bookings'));

if (process.env.NODE_ENV == "production") {
  app.use(express.static("mern_inn_frontend/build"))
}


app.listen(port, () => {
  console.log(`MERN INN listening at http://localhost:${port}`)
})


