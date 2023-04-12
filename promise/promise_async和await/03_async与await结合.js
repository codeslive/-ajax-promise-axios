/**
 * resource  1.html  2.html 3.html 文件内容
 */
// 导入 fs 模块
const fs = require('fs');
// 导入 util 模块
const util = require('util');
const mineReadFile = util.promisify(fs.readFile);
//回调函数的方式
// fs.readFile('./resource/1.html', (err, data1) => {
//     if(err) throw err;
//     fs.readFile('./resource/2.html', (err, data2) => {
//         if(err) throw err;
//         fs.readFile('./resource/3.html', (err, data3) => {
//             if(err) throw err;
//             console.log(data1 + data2 + data3);
//         });
//     });
// });

//async 与 await
async function main () {

  try {
    //读取文件内容
    let data1 = await mineReadFile('./resource/1.html');
    let data2 = await mineReadFile('./resource/2.html');
    let data3 = await mineReadFile('./resource/3.html');
    console.log(`${data1}${data2}${data3}`);
  } catch (e) {
    console.log(e);
  }

}

main();