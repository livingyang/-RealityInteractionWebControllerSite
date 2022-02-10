const
  express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = process.env.LEANCLOUD_APP_PORT || 5000

const app = express()

console.log('port:', port);

app.use(history())
app.use(serveStatic(__dirname + '/dist/spa'))
app.listen(port)