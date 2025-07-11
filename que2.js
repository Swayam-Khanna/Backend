import http from 'http';
const PORT=3000;
const server=http.createServer((req,res)=>{
    if(req.url==='/' && req.url==='GET'){
        res.setHeader('Content-Type','text/plain');
        res.end('Home Page');
    }else if(req.url==='/about'){
        res.setHeader('Content-Type','text/plain');
        res.end("About");
    }else{
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.end('Page Not Found');
    }
});
server.listen(PORT,()=>{
    console.log(`Server running on PORT:${PORT}`);
})
