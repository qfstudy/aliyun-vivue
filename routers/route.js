const router = require('koa-router')()
const path= require('path')
const fs = require('fs')

router.get('/',async (ctx,next) => {
  ctx.response.type = 'text/html'
  ctx.response.body = await fs.createReadStream(path.resolve(__dirname, '../public/index.html'))
})

module.exports = router