// const fs = require('fs')
//
// fs.readFile('./resource/content.txt',(err,data)=>{
//   if(err)throw err
//
//   console.log(data.toString())
// })

//Promise封装

const fs = require('fs')

const p  = new Promise((resolve,reject)=>{
  fs.readFile('./resource/content.txt1',(err,data)=>{
    if(err){
      reject(err)
    }else{
      resolve(data)
    }
  })
})

p.then(
  (value)=>{
    console.log(value.toString())
  }, (reason)=>{
  console.log(reason)
  //   throw new Error(reason)
  })

