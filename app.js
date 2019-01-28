const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const users = require('./routes/users')
const cors = require('koa2-cors');
const config = require('./config/config')
onerror(app)
app.use(cors(config.cors))
app.use(bodyparser({enableTypes:['json', 'form', 'text']}))
app.use(users.routes(), users.allowedMethods())
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
module.exports = app
