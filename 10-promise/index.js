// function delay(ms) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(resolve, ms)
//   })
// }
//
// delay(5000)
//   .then(() => console.log('Done!'))

// const fs = require('fs')
//
// fs.writeFile('./tmp.txt', 'Hello!\n', function () {
//   console.log('Done!');
// })
//
// function promisifiedWriteFile(path, data) {
//   return new Promise(function (resolve, reject) {
//     fs.writeFile('./tmp.txt', 'Hello!\n', resolve)
//   })
// }
//
// promisifiedWriteFile('./tmp.txt', 'Hello!\n')
//   .then(function () {
//     console.log('Done with promise!')
//   })
//   .then()
