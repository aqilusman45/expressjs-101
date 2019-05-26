const express = require('express');
const app = express();

const {expressionRouter} = require('./Expressions/expressions')

const {animalsRouter} = require('./Animals/animals')


const PORT = process.env.PORT || 4001;


// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

app.use('/expressions', expressionRouter);

app.use('/animals', animalsRouter);


app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
    