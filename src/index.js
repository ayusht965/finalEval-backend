const express = require('express');
const app = express();
const cors = require('cors');
const contentRouter = require('./routes/index.js');
const port = 5000;
app.use(cors());
app.use(express.json());
app.use('/', contentRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
