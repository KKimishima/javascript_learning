// じゃんけんゲームの実装

// 変数の宣言
// じゃんけんの手を設定
var goo = 1;  // グー
var cho = 2;  // チョキ
var paa = 3;  // パー
// じゃんけん入力保持変数
var hum
var random_num


// じゃんけん入力ダアログボックスの作成
hum = prompt("半角数値1~3までの数値を入力してください\n\n" + goo + ":ぐー\n" + cho + ":ちょき\n" +  paa + "ぱー\n");
// 数値に変換
// 変数に続き引数は、進数を示す
hum = parseInt(hum,10);
console.log(hum);

// parseInt関数で無効数値が入力されるとNaNがかえされる
// それを判別するニアisNaN
if(isNaN(hum)){
  alert("入力値が間違っています\nブラザをリロードして再入力してください");
}else if(hum < 1 || hum >3){
  alert("入力値がオーバーしています\nブラザをリロードして再入力してください");
}else{
  // 値の自動生成
  random_num = Math.random();
  console.log(random_num);
}
