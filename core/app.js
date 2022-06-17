const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const appointmentsRouter = require('./routes/appointments');
const usersRouter = require('./routes/users');
const specRouter = require('./routes/specializations');
const metricsRouter = require('./routes/metrics');
const clinicsRouter = require('./routes/clinics');
const diagnosesRouter = require('./routes/diagnoses');
const questionnairesRouter = require('./routes/questionnaires');
const answersRouter = require('./routes/answers');
const questionsRouter = require('./routes/questions');

require('dotenv').config();

const app = express();
app.use(cors());
app.options('*', cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user/appointments', appointmentsRouter);
app.use('/user', usersRouter);
app.use('/spec', specRouter);
app.use('/metric', metricsRouter);
app.use('/clinic', clinicsRouter);
app.use('/diagnosis', diagnosesRouter);
app.use('/questionnaire', questionnairesRouter);
app.use('/answer', answersRouter);
app.use('/question', questionsRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err,
  });
});

module.exports = app;
