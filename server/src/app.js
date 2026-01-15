import express from 'express';
import cors from 'cors';

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Test
app.get('/', (req, res) => {
  res.send('Hospital backend is running ...');
});

export default app;