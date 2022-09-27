/**
 * resource  1.html  2.html 3.html 文件内容
 */
const fs = require("fs")
const util = require("util")
const mineReadFile = util.promisify(fs.readFile)

//回调函数的方式
// fs.readFile("./resource/1.html", (err, data1) => {
//   if (err) throw err
//   fs.readFile("./resource/2.html", (err, data2) => {
//     if (err) throw err
//     fs.readFile("./resource/3.html", (err, data3) => {
//       if (err) throw err
//       console.log(data1 + data2 + data3)
//     })
//   })
// })

//async await
async function main() {
  try {
    let p1 = await mineReadFile("./resource/11.html")
    let p2 = await mineReadFile("./resource/2.html")
    let p3 = await mineReadFile("./resource/3.html")
    console.log(p1 + p2 + p3)
  } catch (e) {
    console.log(e)
  }

}

main()
