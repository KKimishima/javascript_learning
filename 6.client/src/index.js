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