const express = require("express");
const ViteExpress = require("vite-express");
const router = require('./router.js');
const PORT = process.env.PORT || '3000';

const app = express();

app.use('/api/v1', router);

ViteExpress.listen(app, PORT, () => {
  console.log(`Server is listening on port: ${ PORT }`);
});

module.exports = app;