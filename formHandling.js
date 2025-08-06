import http from 'http';
import path from 'path';
import url from 'url';
import fs from 'fs/promises';
import {parse} from 'querystring';
const PORT=8000;
const hostname='127.0.0.1';
const __filename=url.fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
console.log(__filename,__dirname);
const server=http.createServer(async(req,res)=>{
  if(req.method==='GET' && req.url==='/'){
    let filePath=path.join(__dirname,'public','form.html');
    const data=await fs.readFile(filePath);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(data);// we can use res.write(data) but then we have to use res.end() to end the connection
  }else if(req.method==='POST' && req.url==='/submit'){
    let body='';
    req.on('data',(chunk)=>{
        body+=chunk.toString();
        
    });
    req.on('end',()=>{
        const parsedData=parse(body);
        console.log(parsedData);
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(
            `<h1>Form Submission</h1><p>Name:${parsedData.username}</p><p>Email:${parsedData.email}</p><p>Message:${parsedData.message}</p>
            <br><br><h3>Thanks ${parsedData.username} for form Submission</h3>`
        );
    })
  }else{
    res.writeHead(500,{'Content=Type':'text/plain'});
    res.write('Server Error');
    res.end();
  }
});
server.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${hostname}:${PORT}`);
});