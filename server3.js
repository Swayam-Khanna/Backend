import http from 'http';
const PORT=7000;
const users=[
    { id:1 , name:"Swayam Khanna"},
    { id:2 , name:"Krishna Khanna"},
];
const server=http.createServer((req,res)=>{
    //check if GET request
    if(req.url==='/api/user' && req.method==='GET'){
        // res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(users));
        res.end()
    }
    else if(req.url.match(/\/api\/users\/([0-9]+)/)&& req.method==='GET'){
        res.setHeader('Content-Type','application/json')
        res.write(JSON.stringify({id:1,name:"Swayam Khanna"}))
        res.end();
        
    }
    else if(req.url.match(/\/api\/users\/([0-9]+)/)&&req.method==='GET'){
        const id=req.url.split('/')[3];
        const user=users.find((user)=>user.id===parseInt(id));
        if(users){
            res.setHeader('Content-Type','application/json');
            res.write(JSON.stringify(user));
            res.end();

        }
        else{
            res.setHeader('Content-Type','application/json');
            res.statusCode=404;
            res.write(JSON.stringify({message:'USer not found'}));
            res.end();
        }
            
    }
    else{
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify({message:'Server Not FOund'}));
        res.statusCode=404;
        res.end()
    }
});
server.listen(7000,()=>{
   console.log(`Server running on Port:${PORT}`);
})