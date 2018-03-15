export class C1 {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  toString() {
    return `${this.name}さんは${this.age}歳です`
  }
}

export class C2 extends C1 {
  constructor(name, age, post) {
    super(name, age)
    this.post = post
  }
  getPost() {
    return `${this.name}さんは${this.age}歳で${this.post}の役職です`
  }
}

export let C3 = {
  name: "bar",
  brith: new Date(2020, 0, 1),
  toString() {
    return `${this.name}さんのたん誕生日は${this.brith.toLocaleDateString()}です`
  }
}

export class C4 {
  constructor(ary) {
    this.ary = ary
  }
  itr() {
    for (let d of this.ary) {
      console.log(d)
    }
  }
}

export class C6 {
  constructor(map) {
    this.map = map
  }
  itr() {
    for (let [key, value] of this.map) {
      console.log(`${key}:${value}`)
    }
  }
}

export function* C7() {
  yield "あいうえお"
  yield "かきくけこ"
  yield "さしすせそ"
}

let data = { red: "赤", yellow: "黄" }
export let C8 = new Proxy(
  data, {
    get(target, prop) {
      return prop in target ? target[prop] : "?"
    }
  }
)