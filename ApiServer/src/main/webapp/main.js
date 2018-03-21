function aj1() {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ajx1-0").addEventListener("click", () => {
      console.log("イベント発火")
      let re = document.getElementById("a")
      let xhr = new XMLHttpRequest()
      console.log("ajax通信の状態監視開始")
      xhr.onreadystatechange = () => {
        console.log("読み込み状態 = " + xhr.readyState)
        console.log("Httpステータス = " + xhr.status)
        if (xhr.readyState === 4) {
          console.log("読み込み状態4に移行")
          if (xhr.status === 200) {
            console.log("成功,Http200" + xhr.status)
            console.log("レスポンス =" + xhr.responseText)
            re.textContent = xhr.responseText;
          } else {
            console.log("失敗,読み込み状態" + xhr.status)
            console.log("失敗,Httpステータス" + xhr.responseText)
            re.textContent = "サーバエラー"
          }
        } else {
          console.log("通信中")
          re.textContent = "通信中"
        }
      }
      xhr.open("GET", "/ApiServer/AjaxDemo?name="
        + encodeURIComponent(document.getElementById("ajx1-2").value), true);
      console.log("Open実行")
      xhr.send(null)
      console.log("send実行")
    }, false)
  }, false)
}

let aj2 = () => {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ajx-2").addEventListener("click", () => {
      let re = document.getElementById("a")
      let xhr = new XMLHttpRequest()

      // リクエス送信
      xhr.addEventListener("loadstart", () => {
        re.textContent = "通信中"
      }, false)

      // リクエス成功
      xhr.addEventListener("load", () => {
        re.textContent = xhr.responseText
      }, false)

      // リクエスト失敗
      xhr.addEventListener("error", () => {
        re.textContent = "通信失敗"
      }, false)

      // Getリクエスト開始
      xhr.open("GET", "/ApiServer/AjaxDemo?name="
        + encodeURIComponent(document.getElementById("ajx1-2").value), true);
      //Postリクエストリ開始
      xhr.send(null)

    }, false)
  }, false)
}

let aj3 = () => {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ajx-3").addEventListener("click", () => {
      let re = document.getElementById("a")
      let xhr = new XMLHttpRequest()

      // リクエス送信
      xhr.addEventListener("loadstart", () => {
        re.textContent = "通信中"
      }, false)

      // リクエス成功
      xhr.addEventListener("load", () => {
        re.textContent = xhr.responseText
      }, false)

      // リクエスト失敗
      xhr.addEventListener("error", () => {
        re.textContent = "通信失敗"
      }, false)

      // リクエストセット
      xhr.open("POST", "/ApiServer/AjaxDemo", true);
      //Postリクエストリキャラセット
      xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8")
      // postリクエスト
      xhr.send("name=" + encodeURIComponent(document.getElementById("ajx1-2").value))
    }, false)
  }, false)
}

aj1()
aj2()
aj3()

