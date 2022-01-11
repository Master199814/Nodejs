const mongoose=require('mongoose');
const schema=mongoose.Schema;
const todoSchema=new schema({
    username:String,
    useremail:{type:String,unique:true},
    ispromoted:{type:Boolean,default:null}

});
const todoapp1=mongoose.model("Todo",todoSchema);
module.exports=todoapp1;