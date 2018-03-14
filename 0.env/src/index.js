// import 文を使って sub.js ファイルを読み込む。
import { hello } from './sub';
import jQuery from "jquery";
import { onBu } from "./sub";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import "bootstrap"
import "popper.js"

const $ = jQuery;

window.onload = () => {
  document.getElementById("bu").onclick = () => {
    onBu()
  }
}
// sub.jsに定義されたJavaScriptを実行する。
hello();


$(() => {
  $("#jq").css("color", "blue")
})

