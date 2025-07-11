import http from 'http';
const user=[
    { "name": "John Doe",
 "age": 30,
 "profession": "Developer"
    }
];
const PORT=3000;
const server=http.createServer((req,res)=>{
    //check if GET request
    if(req.url==='/api/users' && req.method==='GET'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(user));
    }else{
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end('Server Not Found');
    }

});
server.listen(PORT,()=>{
    console.log(`Server running on PORT:${PORT}`);
});