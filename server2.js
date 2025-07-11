import http from 'http';
const PORT=8000;
const server=http.createServer((req,res)=>{
    try{
        //check ig GET request
        if(req.url==='GET'){
            if(req.url==='/'){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end('<h1>Home Page</h1>');
            }else if(req.url==='/about'){
                res.writeHead(200,{'Content-Type':'text/html'})
                res.end('<h1>ABout</h1>');
            }else{
                throw new Error('Method not found');
            }
        }
    }catch(error){
        res.writeHead(404,{'COntent-Type':'text/plain'});
        res.end('Server Error');
    }
})
server.listen(8000,()=>{
    console.log(`Server running on port number:${PORT}`);
})