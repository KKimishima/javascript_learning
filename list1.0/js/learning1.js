// コンソールアウト学習

// 関数呼び出し
bmi_keisan();

// コンソール呼び出し関数
consol();

// コンソール呼び出し
function consol(){

  // 変数
  var str1 = "Hellow";
  var str2 = "world";
  var num1 = 1;
  var num2 = 2;
  var flow1 = 1.1;
  var flow2 = 2.2;
  var msbox;

  // 文字出力
  console.log(str1);
  // 文字列連結
  console.log(str1 + str2);
  // 文字列連結と文字列リテラル表示
  console.log(str1 + "_" + str2);
  // 数値出力
  console.log(num1);
  // 数値計算
  console.log(num1 + num2);
  // 実数計算(桁数が多い)
  console.log(flow1 + flow2);
  // 数値と文字列の連結(文字に変換されてします)
  console.log("いち" + 1);

  // 入力ダイアログボックス
  msbox = prompt("入力してください");
  // 入力ゲームのボックスを表示
  alert(msbox);
  // 変数の取得
  console.log(msbox);

}

// bmi計算関数
function bmi_keisan(){

  // 簡単な計算処理
  var weight;   // 体重
  var height;   // 身長
  var bmi;      // BMI計算結果

  // 数値を入力
  weight = prompt("BMIを測定致します。体重を(kg)を入力してください");
  height = prompt("続いて身長(cm)を入力してください");

  // bmi計算
  bmi = weight /  ((height / 100) ^ 2);

  // bmiが正常値前提で10から50までの前提
  if (bmi > 10 && bmi > 50) {
    // bmi計算結果を警告ダイアログに表示する
    alert("あなたのBMIは" + bmi + "ですよ");
  } else {
    //異常な数値のエラー
    alert("異常な数値です");
  }

}
