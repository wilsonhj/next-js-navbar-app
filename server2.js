const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/p/:id", (req, res) => { // :id = route param
    app.render(req, res, '/post', {id: req.params.id});
  });

  server.get("*", (req, res) => { // * = all routes handled by server
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log("Now serving on localhost:3000");
  });
});
