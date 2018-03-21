export function aj1() {
  window.alert("読み込み")
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ajx1-0").addEventListener("click", () => {
      let re = document.getElementById("ajx1-1")
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.readyState === 200) {
            re.textContent = xhr.responseText;
          } else {
            re.textContent = "サーバエラー"
          }
        } else {
          re.textContent = "通信中"
        }
      }
      xhr.open("GET", "/ApiServer/AjaxDemo?name="
        + encodeURIComponent(document.getElementById("ajx1-2").value), true)
      xhr.send(null)
    }, false)
  }, false)
}