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
  // console.log(re);
  re.value = data.toLocaleTimeString();
}

export function D4() {
  const re = document.querySelectorAll("#list .ex")
  for (let d of re) {
    console.log(d)
  }
}