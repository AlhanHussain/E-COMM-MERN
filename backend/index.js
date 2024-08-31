const express = require('express');
const cors = require('cors');
// const jwt = require('jsonwebtoken');
const connectDB = require('./config/db');
const { configDotenv } = require('dotenv');
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute');
const { newCollectionRouter } = require('./routes/newCollectionRoute');
const { authMiddleware } = require('./middleware/auth');
const userModel = require('./model/userModel');
const cartRouter = require('./routes/cartRoute');
configDotenv();







const app = express();
const port = 4000


//middleware
app.use(express.json());
app.use(cors());


//db connection
connectDB();


app.use('/',productRouter)
app.use('/images',express.static('upload/images'))

app.use('/user',userRouter)
app.use('/new',newCollectionRouter)
app.use('/',cartRouter)




//API
app.get('/',(req, res) => {
    res.send('Hello World!')
})

app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`)
})


