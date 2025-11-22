const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Simple Express Server is running!!!'));

app.get('/info', (req, res) => res.send('<h1>Information!</h1>'))

app.listen(3000, () => console.log('The simple-express-server is running on port 3000'));