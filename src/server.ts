import * as mongoose from 'mongoose';
import * as express from 'express';
import * as bodyParser from 'body-parser';
const cors = require('cors');
const groceryItemRouter = require('./routers/grocery-item');
const creds = require('../creds.json');

const app = express();

app.use(cors())


const USER_NAME = creds.username;
const PASSWORD = creds.password;
const HOST_NAME = 'localhost:27017';
const DATABASE_NAME = creds.dbName; 
const AUTH_SOURCE = creds.authSource;

mongoose.connect(`mongodb://${USER_NAME}:${PASSWORD}@${HOST_NAME}/${DATABASE_NAME}?authSource=${AUTH_SOURCE}`);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', groceryItemRouter);

module.exports = app;