import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

import hospitalRouter from './routes/hospitalRouter.js';
import favoriteRouter from './routes/favoriteRouter.js';
import userRouter from './routes/userRouter.js';
import db from "../models/index.js";

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;


app.set('port', port || 3000);
app.set('host', host || 'localhost');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async() => {
  try {
    await db.sequelize.authenticate();
    // await db.sequelize.sync({force: true});
    console.log('DB connection successful');
  } catch (err) {
    console.error(err);
  }
})();

app.listen(app.get('port'), () => {
  console.log(`server is running on → ${app.get('host')}:${app.get('port')}`)
})

app.use('/hospitals', hospitalRouter);
app.use('/favorites', favoriteRouter);
app.use('/users', userRouter);