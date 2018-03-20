"use strict";
const express = require('express')
// ルーティングを行うためのモジュール
const router = express.Router()

const list = [
  {
    id: 1,
    name: "hoge",
    age: 30
  }, {
    id: 2,
    name: "foo",
    ape: 40
  }, {
    id: 3,
    name: "bar",
    age: 50,
  }
]


/* GET home page. */
router.get('/', (req, res, next) => {
  // テンプレートファイルを使ってHTMLファイルを返す

  return res.render('index')
})


router.get("/api/list", (req, res, next) => {
  res.json(list)
})


// require構文を使って外部から読み込みたい時にこれを設定
module.exports = router