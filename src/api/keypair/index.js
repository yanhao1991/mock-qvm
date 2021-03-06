const Router = require("koa-router")
const data = require("./data")
const router = new Router()
const utils = require("../../utils")

router.get("/", async (ctx, next) => {
  await utils.sleep(0.5)
  ctx.body = data.list
  // ctx.status = 400
  // ctx.body = {
  //   code: 400,
  //   name: "MissingParameter",
  //   message: "Machine status must be running for this api!"
  // }
})

router.get("/:name", async (ctx, next) => {
  await utils.sleep(0.5)
  ctx.body = {
    data: data.list.data[0]
  }
})

router.post("/", ctx => {
  console.log("hh", ctx.request.body)
  ctx.body = data.create
})

router.post("/:name/attach", async ctx => {
  await utils.sleep(0.5)
  console.log("attach")
  ctx.body = {}
})

module.exports = router
