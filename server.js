import express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

function renderFullPage(html) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>React SSR</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link href="build/favicon.ico" rel="icon" type="image/x-icon" />
        <script async src="build/bundle.js"></script>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}

function handleRender(req, res) {
  // Render the component to a string.
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  // Send the rendered page back to the client.
  res.send(renderFullPage(html));
}

const app = express();

app.use('/build', express.static('build'));

// This is fired every time the server-side receives a request.
app.use(handleRender);

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
