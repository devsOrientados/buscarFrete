var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

//"declaração" das rotas 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/anuncio');
var motoristasRouter = require('./routes/motoristas');
var dashboardRouter = require('./routes/dashboard');


// rotas para Crud

var cadastroRouter = require('./routes/cadastro')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));


//rotas
app.use('/', indexRouter);
app.use('/motoristas', motoristasRouter);
app.use('/anuncio', usersRouter);
app.use('/dashboard', dashboardRouter);
app.use('/cadastro', cadastroRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
