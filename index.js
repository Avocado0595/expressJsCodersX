require('dotenv').config();
const express = require('express');
const app = express();
const port = 8080;
const cookieParser = require('cookie-parser');

app.use(cookieParser(process.env.SESSION_SECRETE)); // for parsing cookie object
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//static file
app.use(express.static('public'));
const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoute');
//midleware
const getmember = require('./middlewares/getmember');
//config
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/',getmember.member, (req, res) => {
  res.render('index', {name: "Thanh Xuan"});
})
//route
app.use('/users',getmember.member, userRouter);
app.use('/auth', authRouter);

//open port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})