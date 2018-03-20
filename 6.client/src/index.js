'use strict';
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("d1").addEventListener("submit", (e) => {
    if (!window.confirm("送信しますか")) {
      e.preventDefault
    } else {
      window.alert("送信しました")
      e.preventDefault
    }
  }, false)
}, false)


document.addEventListener("DOMContentLoaded", () => {

  let timer = window.setInterval(() => {
    let dat = new Date()
    document.getElementById("d2").textContent =
      dat.toLocaleTimeString();
  }, 1000)

  document.getElementById("d2-1").addEventListener("click", () => {
    window.clearInterval(timer)
  }, false)

}, false)


let storege = localStorage
storege.setItem("hoge", "ほげ")
storege.foo = "ふー"
storege["bar"] = "バー"


console.log(storege)
console.log(storege.getItem("hoge"))
console.log(storege)

storege.clear()

let seStorage = sessionStorage
const value = new Map([["hoge", "ほげ"], ["foo", "ふー"], ["bar", "バー"]])

for (const d of value) {
  sessionStorage.setItem(d["0"], d["1"])
}
// for (let i of seStorage) {
console.log(sessionStorage.key(0))

// }
// function cl(init) {
//   let c = init
//   return () => {
//     return ++c
//   }
// }

// const myCl = cl(1);
// console.log(myCl())
// console.log(myCl())
// console.log(myCl())
// console.log(myCl())



// const f = (() => {
//   let init = 0
//   return () => {
//     return ++init
//   }
// })()

// console.log(f())
// console.log(f())
// console.log(f())
// console.log(f())