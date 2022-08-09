var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//"declaração" das rotas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var motoristasRouter = require('./routes/motoristas');
var dashboardRouter = require('./routes/dashboard');
var perfilRouter = require ('./routes/perfil');
var veiculoRouter = require ('./routes/veiculo');
var servicoRouter = require ('./routes/servico');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//rotas
app.use('/', indexRouter);
app.use('/motoristas', motoristasRouter);
app.use('/users', usersRouter);
app.use('/dashboard', dashboardRouter);
app.use('/perfil',perfilRouter);
app.use('/veiculo', veiculoRouter);
app.use('/servico', servicoRouter);

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
