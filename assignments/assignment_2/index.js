const http=require('http');
const port=3000;
const fs=require('fs')
function requesthandler(req,res)
{
    res.writeHead(200,{'content-type':'text/html'})
    fs.readFile('index.html',(err,data)=>
    {
        if(err)
        {
            console.log("Error",err);
            return;

        }
        res.end(data)

    })

}

const server=http.createServer(requesthandler)
server.listen(port,function(err)

{
    if(err)
    {
        console.log("Error",err);
        return;
    }
    console.log("server is runnning at port",port);
    
})