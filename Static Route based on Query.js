const express=require('express');
const app=express();
const PORT=7000;
const lang={
    en:"Hello",
    fr:"Bonjour",
    hi:"Namaste",
}
app.get('/',(req,res)=>{
    res.send('Hello,(Default)');
})
app.get('/greet',(req,res)=>{
  const lim=req.query.lang;
  console.log(lim);
  switch(lim){
    case 'en':
        res.send("Hello");
        break;
        case 'fr':
            res.send("Bonjour");
            break;
            case 'hi':
                res.send("Namaste");
                break;
                default:
                    res.send("Hello,(Default)");
                    break;
  }

})
app.listen(PORT,()=>{
    console.log(`Server running on PORT:${PORT}`);
});