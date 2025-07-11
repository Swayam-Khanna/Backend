import http from 'http';
const PORT=8000;
const server=http.createServer((req,res)=>{
   ///res.writeHead(200,{'COntent-Type':'application/json'});
  //  res.end(JSON.stringify({message:'Server Error1'}));
  //  console.log(req.url);// /
  //  console.log(req.method);// GET
  if(req.url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Home Page</h1>');
  }else if(req.url==='/about'){
    res.writeHead(200,{'Content-Type':'text/about'});
    res.end('<h1>About</h1>');
  }else{
    res.writeHead(404,{'Content-Type':'text/html'});
    res.end('<h1>Not Found</h1>');
  }
})
server.listen(PORT,()=>{
    console.log(`Server Running:${PORT}`);
})