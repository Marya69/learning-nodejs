const path= require('path');
// console.log(path.sep);  // sep means separator 




const filePath= path.join('/content','subfolder','text.txt');
// console.log(filePath);

//  const base= path.basename(filePath);
//  console.log(base);

//  path.sep → tells you the folder divider (/ or \).

// path.join() → builds a path from pieces.

// path.basename() → gets just the file name.


const absolute= path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);// resolve → gives you the absolute path
// __dirname → gives you the current directory