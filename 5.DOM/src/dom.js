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
      window.alert("hoge")
      let inFile = document.getElementById("d16").files
      let re = [];
      for (let i of inFile) {
        re.push(`ファイル名:${i.name}`)
        re.push(`ファイル種類:${i.type}`)
        re.push(`ファイル名:${i.size / 1024}KB`)
        re.push(`ファイルの最終更新日:${i.lastModifiedDate}`)
      }
      window.alert(re.toString())
    }, true)
  })
}
