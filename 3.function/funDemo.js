'use strict';
// 関数の基本的な使い方
function getTest(a, b) {
  return a + b;
}

console.log(getTest(1, 2))

// コンストラクタを利用した場合
let fn1 = new Function("a", "b", "return a + b")
console.log(fn1(1, 2))

// アロー演算子
let fn2 = (a, b) => {
  return a + b
}
console.log(fn2(1, 2))

let fn3 = (a, b) => a + b
console.log(fn3(1, 2))

// 関数定義の注意点
// 改行におけるセミコロンの動き
let fn4 = (a, b) => {
  // リターンで帰ってしまう
  return
  a + b;
}
console.log(fn4(1, 2))
// 関数リテラルの型
let fn5 = (a, b) => {
  return a + b;
}

console.log(fn5(1, 2))
fn5 = 0;
console.log(fn5)

// 静的呼び出し
// こう書いてしまうと前後関係なしに呼びだされる
console.log(fn6(1, 2))

function fn6(a, b) {
  return a + b
}

// スコープ
var hoge = "hoge"

function gethoge() {
  console.log("ここは何だ" + hoge)
  var hoge = "hogehoge"
  return hoge
}

console.log(gethoge())
console.log(hoge)

// 引き数
const fn7 = (a, b) => a + b;
// 引き数をチェックしない
console.log(fn7(1, 2, 3, 4, 5))
// 引き数チェックを行う場合
const fn8 = function (a, b) {
  if (arguments.length !== 2) {
    throw new Error("引き数が異なります")
  }
  console.log(a + b)
}

try {
  fn8(1, 1, 1, 1, 1)
} catch (e) {
  console.log(e.message)
}

// 可変引き数
const fn10 = (...nums) => {
  let re = 0;
  for (let n of nums) {
    if (typeof n !== "number") {
      throw new Error(`${n}は数値ではありません`)
    }
    re += n;
  }
  return re
}

try {
  console.log(fn10(1, 2, 3, 4, 5))
} catch (e) {
  console.log(e.message)
}

// キーワード引き数
const fn11 = ({ a = 1, b = 2 }) => a + b
console.log(fn11({}))

// 可変引き数
const fun12 = (...nums) => [Math.max(...nums), Math.min(...nums)]
const [varMax, varMin] = fun12(1, 123, 42341, -234234)
console.log(varMax)
console.log(varMin)

// 高階関数
const fun13 = (data, fn) => {
  for (let n in data) {
    fn(data[n], n)
  }
}

const fun14 = (value, key) => console.log(`${value}:${key}`)

const ary = [1, 2, 3, 4, 5]
fun13(ary, fun14)

const fun15 = (data, fn) => {
  for (let n in data) {
    fn(data[n], n)
  }
}

console.log("匿名関数実験")
fun15(
  ary,
  (value, key) => console.log(`${value}:${key}`)
)

// スコープチェーン
let y = "Glo"

const fun16 = () => {
  let y = "LoOuter"
  const fun17 = () => {
    let z = "LoInner"
    console.log(z)
    console.log(y)
    // console.log(x)
  }
  console.log("fun17実行")
  console.log(y)
  fun17()
}
console.log("fun16実行")
fun16()

function cl(init) {
  let c = init
  return () => {
    return ++c
  }
}

const myCl = cl(1);
console.log(myCl())
console.log(myCl())
console.log(myCl())
console.log(myCl())
