console.log('checking the node file');

const fs = require('fs');

// fs.writeFile('message.txt', 'This is the first file', (err) => {
//     if (err) throw err;
//     console.log('First file created')
// })

fs.readFile('./message.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('File readed successfully')
})