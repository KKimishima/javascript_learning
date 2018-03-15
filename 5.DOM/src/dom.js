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

export let onclickEvent = document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('d7').addEventListener('click', () => {
    window.alert("イベントリスナー")
  }, false)
}, false);