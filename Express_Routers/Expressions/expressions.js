const express = require('express');
const expressionRouter = express.Router();

const { getElementById, getIndexById, updateElement,
    seedElements, createElement } = require('../services/utils');

const expressions = [];
seedElements(expressions, 'expressions');

// Get all expressions
expressionRouter.get('/', (req, res, next) => {
    
    res.json(expressions);
  });
  
  // Get a single expression
  expressionRouter.get('/:id', (req, res, next) => {
    const foundExpression = getElementById(req.params.id, expressions);
    if (foundExpression) {
      res.send(foundExpression);
    } else {
      res.status(404).send();
    }
  });
  
  // Update an expression
  expressionRouter.put('/:id', (req, res, next) => {
    const expressionIndex = getIndexById(req.params.id, expressions);
    if (expressionIndex !== -1) {
      updateElement(req.params.id, req.query, expressions);
      res.send(expressions[expressionIndex]);
    } else {
      res.status(404).send();
    }
  });
  
  // Create an expression
  expressionRouter.post('/', (req, res, next) => {
    const receivedExpression = createElement('expressions', req.query);
    if (receivedExpression) {
      expressions.push(receivedExpression);
      res.status(201).send(expressions, receivedExpression);
    } else {
      res.status(400).send();
    }
  });
  
  // Delete an expression
  expressionRouter.delete('/:id', (req, res, next) => {
    const expressionIndex = getIndexById(req.params.id, expressions);
    if (expressionIndex !== -1) {
      expressions.splice(expressionIndex, 1);
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  });
  

  
module.exports = {
    expressionRouter
}