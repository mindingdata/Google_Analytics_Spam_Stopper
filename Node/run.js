var fs = require('fs');
var array = fs.readFileSync('../spamlist.txt').toString().split("\r\n");
var concatenated = '';
for(i in array) {
    concatenated += array[i].replace('\.', '\\.');
    console.log('Loading : ' + array[i]);
    
    if(i < array.length - 1)
        concatenated += '|';
}
console.log('Completed output : ' + concatenated);
fs.writeFile('../output.txt', concatenated);