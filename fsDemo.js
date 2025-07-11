//import fs from 'fs';
// fs.readFile('./test.txt','utf8',(err,data)=>{
//     console.log(data);
// })
// const data=fs.readFileSync('./test.txt','utf8');
// console.log(data);
//fs using promises
import fs from 'fs/promises'
// fs.readFile('./test.txt','utf8')
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));
// use of async await
const fff=async ()=>{
    try{
        const data=await fs.readFile('./test.txt','utf8');
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
};
const ddd=async()=>{
    try{
        fs.writeFile('./test.txt','Hello ,I am writing in test.txt file');
        console.log('File written to.............');
    }
    catch(error){
        console.log(error);
    }
};
fff();
ddd();
const ggg=async()=>{
    try{
        fs.writeFile('./test.txt','Hello, Welcome to Node.js');
        console.log('Written in Vscode');
    }
    catch(error){
        console.log(error);
    }

};
ggg();
//append file()
const ghj=async()=>{
    try{
       await fs.appendFile('./test.txt','\nWe are trying to learn Backend using node.js and express.js');
        console.log('Appended file...........');

    }catch(error){
        console.log(error);
    }
};
ghj();