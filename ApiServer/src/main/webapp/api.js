let api = () => {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn").addEventListener("click", () => {
      const resulet = document.getElementById("resulet")
      let xhr = new XMLHttpRequest()

      // リクエスト待ち
      xhr.addEventListener("loadstart", () => {
        resulet.textContent = "通信中"
      }, false)

      //リクエスト失敗
      xhr.addEventListener("error", () => {
        resulet.textContent = "サーバエラー"
      }, false)

      // リクエスト成功
      xhr.addEventListener("load", () => {
        // jsの配列オブジェクトに変換
        let data = JSON.parse(xhr.responseText)
        // レスポンスの処理
        if (data == null) {
          // 空が帰ったきた場合
          resulet.textContent = "ブックマークが存在しません"
        } else {
          // データが帰った場合
          // ユーザリストを表示する
          const bms = data.bookmarks
          let ul = document.createElement("ul")
          for (const i of bms) {
            // liとa要素を生成
            let li = document.createElement("li")
            let a = document.createElement("a")
            a.href = `http://b.hatena.ne.jp/${i.user}/`
            // テキストノード生成
            let text = document.createTextNode(
              `${i.user} ${i.comment}`
            )
            // テキスト => a => li => ul　ノードの生成
            a.appendChild(text)
            li.appendChild(a)
            ul.appendChild(li)
          }
          resulet.replaceChild(ul, resulet.firstChild)
          // resulet.textContent = xhr.responseText
        }
      }, false)

      // リクエス送信
      xhr.open("GET", "/ApiServer/JsonApiDemo?url="
        + encodeURIComponent(document.getElementById("url").value))
      xhr.send(null)
    }, false)
  }, false)
}

api()