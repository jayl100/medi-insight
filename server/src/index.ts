import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.set('port', port || 3000);
app.set('host', host || 'localhost');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
})

app.listen(app.get('port'), () => {
  console.log(`server is running on → ${app.get('host')}:${app.get('port')}`)
})