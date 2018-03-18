export function D1() {
  const data = new Date()
  const result = document.getElementById("d1")
  result.textContent = data.toLocaleString()
}

export function D2() {
  const list = document.getElementsByTagName("a")
  for (let d of list) {
    console.log(d.href)
  }
  console.log("配列指定 :" + list.item(1).href)
}

export function D3() {
  const data = new Date()
  let re = document.getElementById("time");
  re.value = data.toLocaleTimeString()
}

export function D4() {
  const re = document.querySelectorAll("#list .ex")
  for (let d of re) {
    console.log(d.href)
  }
}

export function D5() {
  const node = document.getElementById("food")
  const c_node = node.childNodes
  for (let d of c_node) {
    if (d.nodeType === 1) {
      console.log(d.value)
    }
  }
}

export function D6() {
  document.getElementById("d6").onclick = () => {
    window.alert("押されました")
  }
}

export function D7() {
  document.getElementById('d7').addEventListener('click', () => {
    window.alert("イベントリスナー")
  }, false)
}


export function D8() {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('d7').addEventListener('click', () => {
      window.alert("イベントリスナー")
    }, false)
  }, false);
}

export function D9() {
  // let re = document.getElementById("d1")
  let re = document.getElementById("d9").getAttribute("href")
  document.getElementById("d9").setAttribute("href", "http://fooss")
  let re2 = document.getElementById("d9").getAttribute("href")
  // let p = re.getAttribute("p")
  console.log(re2)
}

export function D10() {
  let re = document.getElementById("d10")
  let map = re.attributes
  for (const d of map) {
    console.log(d)
  }
}

export function D11() {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("d11-0").addEventListener("click", () => {
      document.getElementById("d11-1").textContent =
        '<a href="http://hoge">hoge</a>';
      document.getElementById("d11-2").innerHTML =
        '<a href="http://hoge">hoge</a>';
    }, false)
  }, false)
}

export function D12() {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("d12").addEventListener("click", () => {
      window.alert("hoge")
      document.getElementById("d12-1").textContent =
        document.getElementById("d12-2").value
    }, false)
  }, false)
}

export function D13() {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("d13-0").addEventListener("click", () => {
      let re = document.getElementsByName("food13")
      let ary = []
      for (let d of re) {
        if (d.checked)
          ary.push(d.value)
      }
      window.alert(ary.toLocaleString())
    }, false)
  }, false)
}

export function D14() {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("d14-0").addEventListener("click", () => {
      let re = document.getElementsByName("food14")
      let r = "";
      for (let d of re) {
        if (d.checked)
          r = d.value;
        // break;
      }

      if (r === "") {
        window.alert("チェックがついていいません")
      } else {
        window.alert(`${r}が選択されました`)
      }

    }, false)
  }, false)
}

export function D15() {
  document.addEventListener("DOMContentLoaded", () => {
    let setCheck = (name, value) => {
      let elem = document.getElementsByName(name)
      for (const d of elem) {
        if (value.indexOf(d.value) > -1) {
          d.checked = true
        }
      }
    }
    setCheck("food15", ["ラーメン", "カレー"])
  }, false)
}

export function D16() {
  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("d16").addEventListener("change", (e) => {
      let inFile = document.getElementById("d16").files
      let re = [];
      for (let i of inFile) {
        re.push(`ファイル名:${i.name}\n`)
        re.push(`ファイル種類:${i.type}\n`)
        re.push(`ファイル名:${i.size / 1024}KB\n`)
        re.push(`ファイルの最終更新日:${i.lastModifiedDate.toLocaleString()}`)
      }
      window.alert(re.toString())
    }, true)
  })
}

export function D17() {
  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("d17").addEventListener("change", (e) => {
      const inText = document.getElementById("d17").files[0]
      const reader = new FileReader()
      reader.addEventListener("load", () => {
        document.getElementById("d17-0").textContent =
          reader.result;
      }, true)
      reader.addEventListener('error', function () {
        console.log(reader.error.message);
      }, true);
      reader.readAsText(inText, "UTF-8")
      // reader.abort()
    }, true)
  })
}

export function D18() {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("d18-3").addEventListener("click", () => {
      // 要素を取得
      const name = document.getElementById("d18-1")
      const url = document.getElementById("d18-2")

      console.log(`name = ${name.value}:url = ${url.value}`)

      // a要素を作製
      let a = document.createElement("a")
      // a要素のオプションをつける
      a.href = url.value

      const text = document.createTextNode(name.value)
      a.appendChild(text)

      let br = document.createElement("br")
      let list = document.getElementById("d18-4")

      list.appendChild(a)
      list.appendChild(br)
    }, false)

  }, false)
}

export function D19() {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("d19-0").addEventListener("click", () => {
      let frag = document.createDocumentFragment();
      const books = [
        { ti: "本1", pe: 1000 },
        { ti: "本2", pe: 2000 },
        { ti: "本3", pe: 3000 }
      ];
      for (const d of books) {
        const li = document.createElement("li")
        const text = document.createTextNode(`${d.ti}:${d.pe}円`)
        li.appendChild(text)
        frag.appendChild(li)
      }
      let list = document.getElementById("d19").appendChild(frag)
    }, false)
  }, false)
}

export function D20() {
  document.addEventListener("DOMContentLoaded", () => {
    let list = document.getElementById("d20")
    let pic = document.getElementById("d20-1")
    let del = document.getElementById("d20-2")

    list.addEventListener("click", (e) => {
      const data = e.target.getAttribute("data-hoge")
      // dataが取得できた場合実行
      if (data) {
        let img = document.createElement("img")
        img.src = `http://2.bp.blogspot.com/${data}.png`
        // img.alt = e.innerHTML
        img.alt = "ほげ"
        img.height = 100
        img.width = 100
        // <div>要素配下に<img>要素が存在するか確認
        if (pic.getElementsByTagName("img").length > 0) {
          pic.replaceChild(img, pic.lastChild)
        } else {
          del.disabled = false
          pic.appendChild(img)
        }
      }
    }, false)
    del.addEventListener("click", () => {
      pic.removeChild(pic.lastChild)
      del.disabled = true
    }, false)
  }, false)
}

export function D21() {
  document.addEventListener("DOMContentLoaded", () => {
    const ele = document.getElementById("d21")

    ele.addEventListener("mouseover", () => {
      ele.style.backgroundColor = "red"
    }, false)
    ele.addEventListener("mouseout", () => {
      ele.style.backgroundColor = ""
    }, false)
  }, false)
}

export function D22() {
  document.addEventListener("DOMContentLoaded", () => {
    const ele = document.getElementById("d22")
    ele.addEventListener("mouseover", () => {
      ele.className = "hl"
    }, false)
    ele.addEventListener("mouseout", () => {
      ele.className = ""
    }, false)
  })
}

export function D23() {
  document.addEventListener("DOMContentLoaded", () => {
    const ele = document.getElementById("d23")
    ele.addEventListener("click", function () {
      this.classList.toggle("hl")
    }, false)
  })
}

export function D24() {
  document.addEventListener("DOMContentLoaded", () => {
    const inner = document.getElementById("d24-in")
    const out = document.getElementById("d24-out")

    inner.addEventListener("click", (e) => {
      window.alert("innerリスナ発生")
      // e.stopPropagation(); outer実行をブロック
      // e.stopImmediatePropagation();　linnerリスナ２をブロック
      e.preventDefault()  //リンクだけカット
    }, false)

    inner.addEventListener("click", (e) => {
      window.alert("innerリスナ2発生")
    }, false)

    out.addEventListener("click", (e) => {
      window.alert("outリスナ発生")
    }, false)

  }, false)
}