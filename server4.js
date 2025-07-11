import http from 'http';
const PORT=4000;
const user=[
    { 
        id:1 , name:"abc"
    },
    {
        id:2 , name:"cde"
    },
]
const server=http.createServer((req,res)=>{
    //check if GET request
    if(req.url==='/api/user' && req.method==='GET'){
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(user));
        res.end();
    }else if(req.url.match(/\/api\/user\/([0-9]+)/)&& req.method==='GET'){
        res.setHeader('Content=Type','application/json');
        res.write(JSON.stringify({id:1,name:"abc"}));
        res.end();
    }else if(req.url.match(/\/api\/user\/([0-9]+)/)&& req.method==='GET'){
       const id=req.url.split('/')[3];
       const users=user.find((users)=>users.id===parseInt(id));
       if(user){
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(user));
        res.end();
       }else{
        res.setHeader('Content-Type','application/json');
        res.statusCode=404;
        res.write(JSON.stringify({message:'USer Not FOund'}));
        res.end();
       }
    }else{
        res.write('Server Not found');
    }

})
server.listen(4000,()=>{
    console.log(`Server Running on Port:${PORT}`);
})