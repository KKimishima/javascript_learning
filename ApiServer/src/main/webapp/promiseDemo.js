function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`入力値は${value}`)
      } else {
        reject("入力値が空です")
      }
    }, 1000)
  })
}

// asyncProcess("テスト").then(
//   response => {
//     console.log(response)
//   },
//   error => {
//     console.log(`エラー :${error}`)
//   }
// )

// asyncProcess2("テスト2")
//   .then(
//   response => {
//     console.log(re)

//   }
// )
