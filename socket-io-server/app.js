var app  = require('express')()
var  http   = require('http')
var  socketIo =  require('socket.io')
const  cors  = require('cors')
//import all  incomming  connection


const  port =  process.env.PORT || 4000
//create http  Server 
const server = http.createServer(app)


const io  = socketIo(server) //connect the client to the default namespace.


//======================Custom name sapce =======================
const nsp  = io.of('/my-namespace')

nsp.emit('hi', 'Hello everyone!')

//listen to all  incomming Connection 
//========================================================================>
io.on('connection', function(socket){
    console.log("User  connected")
    socket.on('chat message', function(msg){
      socket.broadcast.emit('hi');
      io.emit('chat message', msg);
    });

    //broadcast
    socket.on("all",function(data){
    socket.broadcast.emit("broadcast",data)

    })

    //emit  using namesapce 
    ;




  });
  
  
  


server.listen(port,()=>{
    console.log(`listenning  to  port ${port}`)
})