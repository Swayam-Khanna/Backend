import http from 'http';
const PORT=3000;
const server=http.createServer((req,res)=>{
    res.write("Welcome to My First Node.js Server");
    res.end();
})
server.listen(PORT,()=>{
    console.log(`Server running on PORT:${PORT}`);
})