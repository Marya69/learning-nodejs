// for reading and writeing file 

const {readFileSync, writeFileSync}= require('fs');
// const fs= require('fs'); // same way u can do it
// fs.readFileSync

const first= readFileSync('./content/first.txt','utf8');
const second= readFileSync('./content/secound.txt','utf8');
const third =writeFileSync(
    './content/result-sync.txt',
    `here is file to write`, 
    {flag: 'a'} // flag a means append , w means write overwrite the file this exists conntent ganna be deeleted by default is w
    ); 
console.log(first,second);

// sync means node js will wait for this task to complete before moving on to the next one

// async means node js will not wait for this task to complete before moving on to the next one
const {readFile, writeFile}= require('fs'); 
  readFile('./content/result-async.txt','utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }  
    console.log(result);
    
});
writeFile('./content/result-async.txt',
'this is async filejjjj',
(err,result)=>{ 
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
});
// async means node js will not wait for this task to complete before moving on to the next one 
console.log('starting next task');