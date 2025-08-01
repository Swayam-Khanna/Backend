const express=require('express');
const app=express();
const path=require('path');
const multer=require('multer');
const PORT=5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','home.html'));
    //res.redirect('/about');
});
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','about.html'));
});
//configure the multer
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads1/');//where we have to upload the file or image
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname);
    },
});
const upload=multer({storage:storage});
app.post('/submit',upload.single('marksheet'),(req,res)=>{
      console.log(req.body);
      if(req.file){
        console.log('Details are entered and file is uploaded');
        console.log('New File Submission: ');
        console.log('Filename: '+req.file.filename);
        console.log('Path: '+req.file.path);
        console.log('Mimetype: '+req.file.mimetype);
        
      }
  //  res.send('File is submitted with login details');
    res.redirect('/home');
});
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','form.html'));
})
app.listen(PORT,()=>{
    console.log(`Server running on PORT:${PORT}`);
});