const express = require('express');
const { calculate } = require('./calculator');
const { handleResponse } = require('./responseHandle');
const port = 3000;

const app = express();
app.use(express.json());

app.post('/calculate', (req, res) => {
  const { op, num1, num2 } = req.body;
  const answer = calculate(op, num1, num2);
  res.send(handleResponse(answer, 200));
});

app.listen(port, () => {
  console.log(`The server is running on the port : ${port}`);
});
