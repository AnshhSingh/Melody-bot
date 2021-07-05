const express = require('express');
const server = express();
server.all('/', (req, res)=>{
    res.send('my bot working rn😲')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}
//notes for future etc
module.exports = keepAlive;