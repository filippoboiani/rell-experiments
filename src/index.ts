import express from 'express';
import { Request, Response } from 'express';
import { PostchainWrapper } from './postchain-wrapper';

const app = express();
const { PORT = 3000 } = process.env;
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world',
  });
});

app.post('/cities', (req: Request, res: Response) => {
  const wrapper = new PostchainWrapper();
  const user = wrapper.getRandomKeyPair();
  wrapper.insertCity(user, req.body.name)
    .then(result => {
      console.log(result);
      res.status(200).json({ result })
    })
    .catch(error => res.status(400).send(error))
});

app.get('/cities', (req: Request, res: Response) => {
  const wrapper = new PostchainWrapper();
  wrapper.getAllCities()
    .then(result => res.status(200).json({ result }))
    .catch(error => res.status(400).send(error))
});

app.get('/cities/:name', (req: Request, res: Response) => {
  const wrapper = new PostchainWrapper();
  wrapper.getOneCity(req.params.name)
    .then(result => {
      console.log('result:::: ', result);
      res.status(200).json({ result })
    })
    .catch(error => res.status(400).send(error))
});

app.listen(PORT, () => {
  console.log('server started at http://localhost:'+PORT);
});
