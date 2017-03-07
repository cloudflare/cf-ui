import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import compression from 'compression';
import Html from './components/html';

const app = express();
const port = process.env.PORT || 8000;

app.use(compression());
app.use('/build', express.static('build'));

app.get('*', (req, res) => {
  res.send(`<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(<Html />)}`);
});

app.listen(port);

console.log('open http://localhost:%d', port);
