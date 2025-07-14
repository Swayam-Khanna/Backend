import http from 'http';
import path from 'path';
import fs from 'fs/promises';
import url from 'url';
const PORT=8000;
const hostname='127.0.0.1';
const __filename=url.fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const server=http.createServer(async(req,res)=>{
    //check if get request
     
    try{
        if(req.method==='GET'){
             let filePath;
            if(req.url==='/'){
               filePath=path.join(__dirname,'public','index.html');
            }else if(req.url==='/about'){
                filePath=path.join(__dirname,'public','about.html');
            }else{
                throw new Error("Page Not FOund");
            }
            const data=await fs.readFile(filePath);
            res.setHeader('Content-Type','text/html');
            res.write(data);
            res.end();
        }else{
            res.setHeader('Content-Type','text/plain');
            res.end('Method Not found');
        }
    }
    catch(error){
        res.writeHead(500,{'Content-Type':'text/plain'});
        res.end('Server Error');
    }
});
server.listen(PORT,hostname,()=>{
    console.log(`Server running on http://${hostname}:${PORT}`);
    
})