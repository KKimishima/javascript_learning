"use strict"
// httpを利用するためのモジュール
const http = require('http')
const express = require('express')
const app = express()
const logger = require("morgan")

// ルーティングファイルを読み込む
const index = require('./routes/index')

// テンプレートファイルを配置したディレクトリを指定
app.set('views', `${__dirname}/views`)
// テンプレートファイルの形式としてejsを指定
app.set('view engine', 'ejs')
// デフォルトのルーティングとしてindexを指定

app.use(logger())
app.use('/', index)

app.use((req, res, next) => {
  res.status('404')
  return res.render('error', { message: "404 Not Found" })
});


// apiサーバ
// const list = [
//   {
//     id: 1,
//     name: "hoge",
//     age: 30
//   }, {
//     id: 2,
//     name: "foo",
//     ape: 40
//   }, {
//     id: 3,
//     name: "bar",
//     age: 50,
//   }
// ]
// app.get("/api/list", (req, res, next) => {
//   res.json(list)
// })

// app.post("/post", (req,res,next) => {
//   res.render("")
// })
// サーバーを定義、Expressを利用する
const server = http.createServer(app)
// ３０００番ポートでリクエストを待ち受ける
server.listen('3000')