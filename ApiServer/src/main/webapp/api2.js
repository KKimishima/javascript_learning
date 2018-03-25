document.addEventListener("DOMContentLoaded", () => {
  //テスト
  document.getElementById("btn").addEventListener("click", () => {
    let url = "http://b.hatena.ne.jp/entry/jsonlite/?callback=show&url="
      + encodeURIComponent(document.getElementById('url').value)
    let s = document.createElement("script")
    s.src = url
    document.getElementsByTagName("body").item(0).appendChild(s);
  }, false)
}, false)


function show(data) {
  const resulet = document.getElementById("resulet")
  if (data === null) {
    resulet.textContent = 'ブックマークは存在しませんでした。';
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
    resulet.appendChild(ul)
  }
}