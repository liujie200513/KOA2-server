const router = require('koa-router')()
const config = require('../config/config')
router.prefix('/users')
router.post('/logion',async ctx => {
  let user = ctx.request.body
  ctx.cookies.set('user', JSON.stringify(user), config.cookies);
  ctx.cookies.set('isLogin', true, config.cookies);
  ctx.body = {
    code:"0",
    message:"success",
    data:{
       user:user,
       isLogin:true
    }
  }
 });
 router.post('/add',async ctx => {
  ctx.body = {
    code:"0",
    message:"success",
    data:true
  }
 });
module.exports = router
