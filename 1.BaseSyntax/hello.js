'use strict';
// コメントテスト
/**
 * ドキュメント
 */

const TEST = "定数宣言";
let set1 = "変数使用バーション";
// let set1 = "重複宣言";
// TEST = "定数上書き"
console.log(set1 + ":" + TEST)

//　テンプレート文字列
let temp1 = "temp1";
let temp2 = "temp2";
let temp = `テンプレート1 = ${temp1},テンプレート2 = ${temp2}`;
console.log(temp);

// 配列
let data = ["いち", "に", "さん"];
let data2 = [1, data, 3, 4]
console.log(data[0])
console.log(data2[1][1])

// 連想配列
let obj = { 1: "いち", 2: "さん", 3: "さん" }
console.log(obj["1"])

// 未定義値
// 参照されることを想定してない
console.log(obj["4"])

// 分割代入(配列)
let data3 = [1, 2, 3, 4, 5]
let [x1, x2, x3, ...etc] = data3;
console.log(x1);
console.log(etc);

// 分割代入(オブジェクト)
let data4 = { hoge: "hogehoge", foo: "foofoo", bar: "barbar" }
let { hoge, foo, bar = 'バー' } = data4
console.log(hoge)
console.log(bar)

// 比較
let dif1 = 1;
let dif2 = "1";
console.log(`==での比較:${dif1 == dif2}`);
console.log(`===での比較:${dif1 == dif2}`);

// 特殊演算子
let data5 = [1, 2, 3, 4]
console.log(data5[0])
console.log(delete data5[0])
console.log(data5[0])

//制御分
// let data6 = 12
// let input = window.prompt("数値を入力してください")
// if (input >= 100) {
//   window.confirm("100以上です")
// } else if (input >= 50) {
//   window.confirm("50以上です")
// } else {
//   window.confirm("50以下です")
// }

// let input2 = window.prompt("季節を漢字一文字で入力しください")
// switch (input2) {
//   case "夏":
//     window.confirm("summer")
//     break
//   case "秋":
//     window.confirm("autumn")
//     break
//   case "冬":
//     window.confirm("winter")
//     break
//   case "春":
//     window.confirm("spring")
//     break
//   default:
//     window.confirm("例外文字が入力されました")
// }

// for in
let data7 = { 1: "一", 2: "二", 3: "三", 4: "四", 5: "五" }
console.log("for in")
for (let key in data7) {
  console.log(data7[key])
}

let i = 1
let j = 0
try {
  //エラー発生
  if (j == 0) { throw new Error("0で割りました") }
  let z = i / j
} catch (e) {
  console.log(e)
} finally {
  console.log("ファイナリー")
}