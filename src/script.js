const testFolder = './src/assets/img'
const fs = require('fs')

let all_cakes_arr = []
fs.readdirSync('./src/assets/img/cakes').forEach((file) => {
  all_cakes_arr.push(file)
})

let best_cakes_arr = []
fs.readdirSync('./src/assets/img/best_cakes').forEach((file) => {
  best_cakes_arr.push(file)
})
console.log(best_cakes_arr)
