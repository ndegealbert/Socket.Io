import  React,{useState,useEffect} from  'react'
import  Opensocket from  'socket.io-client'
import{
socket,
usernameSapce
 } from  './socket'

const  Chat  =()=>{
        //State

const [chatMessage,setchatMessage]=useState([])
const [broadcast,setbroadCast] =useState('')
const [allusers,setalluser]=useState('')
const [namesapace,setNameSpace] =useState('')
    //const  [socket,setSocket]=useState()
   //connect the socket   
   useEffect(() => {
     
        //Emmit other news  
      
         //socket.on('userdata',userdata=>setreceived(userdata))
        socket.on('chat message',function(msg){ setchatMessage(msg) })
        socket.on('broadcast',function(msg){setalluser(msg)})
        usernameSapce('hi',function(data){
          setNameSpace(data)
        })

    },[])

       
        
          var value =(event)=>{
              setchatMessage(event.target.value)            
            }         
          function Send()
             {
              socket.emit('chat message',chatMessage)     
              console.log(chatMessage)        
            }

             function  broadcastdata(event){
                  setbroadCast(event.target.value)
              }

             function Sendbroadcast(){
               socket.emit('all',broadcast)
             }
    
    //   console.log(recived)

    console.log(chatMessage)
    console.log(broadcast)
    console.log(namesapace)
  
    return (
        <div>
           
         
            
          

            
            <p>Received</p>
            
            <input onChange={value} type="text"/>
            <p>{chatMessage}</p>
            <button onClick={Send}>Send</button>  

            <p>Broadcasat to  all  connected  socket </p>
            <input onChange={broadcastdata} type="text"/>
              <p>{allusers}</p>
            <button onClick={Sendbroadcast}>Send</button>  

               
        </div> )}
export  default Chat