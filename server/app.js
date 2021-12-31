var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var authRouter = require('./routes/auth');
var userRouter = require('./routes/users');

// token过期时间 单位是秒
const tokenExpirationTime = 5;

var app = express();

app.options('*', cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: '*'
}));

app.use(function (req, res, next) {
  if (req.url.includes('/auth')) {
    next();
    return;
  }

  if (!req.headers.authorization && req.method !== 'OPTIONS') {
    res.status(401);
    res.send();
    return;
  }

  if (req.headers.authorization) {
    // 判断是否过期
    var tokenTime = Number(req.headers.authorization);
    var currentTime = Number(new Date().getTime().toString().substring(0, 10));
    var expirationTime = currentTime - tokenTime;
    console.log('expirationTime:', expirationTime);
    if (expirationTime > tokenExpirationTime) {
      res.status(401);
      res.send();
      return;
    }
  }

  next();
});

app.use('/user', userRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


module.exports = app;
