const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log(error);

  response.sendStatus(500);
});

app.listen(3001, () =>
  console.log('Server is running at http://localhost:3001'),
);
