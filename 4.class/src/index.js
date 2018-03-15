
import "babel-polyfill"
import { C1 } from "./ClassDemo.js"
import { C2 } from "./ClassDemo.js"
import { C3 } from "./ClassDemo.js"
import { C4 } from "./ClassDemo.js"
import { C6 } from "./ClassDemo.js"
import { C7 } from "./ClassDemo.js"
import { C8 } from "./ClassDemo.js"

let c1 = new C1("hoge", 20)
let c2 = new C2("foo", 30, "一般")
let c3 = C3
let c4 = new C4(["いち", "に", "さん"])
let c5 = new C4("あいおえお")
let c6 = new C6([["一", 1], ["二", 2], ["三", 3]])
let c7 = C7
let c8 = C8


console.log(c1.toString())
console.log(c2.getPost())
console.log(c3.toString())
c4.itr()
c5.itr()
c6.itr()

for (let d of c7()) {
  console.log(d)
}
console.log(c8.red)