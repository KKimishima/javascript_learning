'use strict';

// 明示的に数値に変換
let n = "123XX";
console.log(Number.parseInt(n))

// シンボル
let sym1 = Symbol("sym");
let sym2 = Symbol("sym");

console.log(typeof sym1)
console.log(sym1.toString())
console.log(sym1 === sym2)

// 配列オブジェクトの使い方
let ary1 = [1, 2, 3, 4]
console.log(ary1.length);
ary1.push(5)
console.log(ary1);
ary1.pop()
console.log(ary1);
ary1.pop(2)
console.log(ary1);

// 配列内容を処理する
let ary2 = [1, 2, 3, 4]
let ary3 = []
// value 値
// index インデックス値
// arry  元の配列
// 指定した関数で順に処理する
ary2.forEach(function (value, index, arry) {
  ary3.push(value + 100)
});
console.log("forEach =" + ary3)

// 指定されたルールで加工する
let ary4 = [1, 2, 3, 4]
let ary5 = ary4.map(function (value) {
  return value + 100
});
console.log(ary5)

// 個々の要素を判別する関数
let ary6 = [1, 3]
let result = ary6.some(function (value) {
  return value % 2 == 0
})

if (result) {
  console.log("偶数が含まれています")
} else {
  console.log("奇数が含まれています")
}

// 個々の要素を判別するための関数
let ary7 = [1, 2, 6, 4, 7, 34, 99, 77]
let result2 = ary7.filter(function (value) {
  return value % 2 == 0
})

console.log(`偶数 = ${result2}`)
// Mapを使用する
let map1 = new Map();
map1.set('hoge', "ほげほげ")
map1.set('', "ほげほげ")
map1.set('hoge', "ほげほげ")
console.log(map1)

let map2 = new Map([["hoge", "ほげ"], ["foo", "ふー"], ["bar", "バー"]])

console.log(map2.get("hoge"))

//Setを利用する(重複をゆるさない)
let set1 = new Set()
set1.add(10)
set1.add(20)
set1.add(20)
set1.add(30)

console.log(set1)
for (let v of set1) {
  console.log(v)
}

set1.delete(10)
console.log(set1.size)

// 日付と時刻
let d1 = new Date();
let d2 = new Date("2020/1/1 00:00")

console.log(d1.toLocaleDateString())
console.log(d2.toLocaleString())

// 正規表現
let re1 = new RegExp()

// オブジェクト生成
let obj = { x: 1, y: 2, z: 3 }

