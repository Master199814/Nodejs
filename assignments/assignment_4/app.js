const express=require('express');
const mongoose=require('mongoose');
const todo=require('./model/Todo');
mongoose.connect('mongodb://localhost:27017/assgn4');
const port =3000;
const path=require('path');
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

app.get('/',async(req,res)=>
{
    var userslist=await todo.find()
    return res.render('home',{userslist});
    
})
app.get('/form',function(req,res)
{
    return res.render('form');
});
app.post('/user/data',async(req,res)=>
{
    await todo.create({
        username:req.body.name,
        useremail:req.body.email,

    });
    return res.redirect('/');
});
app.post('/user/:id/promote',async(req,res)=>
{
    await todo.updateOne({_id:req.params.id},{ispromoted:true})
    res.redirect('/');
});
app.post('/user/:id/delete',async(req,res)=>
{
    await todo.deleteOne({_id:req.params.id})
    res.redirect('/');
});
app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in running the server",err);

    }
    console.log('Yup! My express server is running on Port:',port);

});