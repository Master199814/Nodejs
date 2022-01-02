const express=require('express');
const port =3000;
const path=require('path');
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
var users=[
   
]
app.get('/',function(req,res)
{
    return res.render('home',{user_list:users});
    
})
app.get('/form',function(req,res)
{
    return res.render('form');
})
app.post('/user/data',function(req,res)
{
    users.push(req.body);
    return res.redirect('/');
})
app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in running the server",err);

    }
    console.log('Yup! My express server is running on Port:',port);

});