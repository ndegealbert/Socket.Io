import  Opensocket from  'socket.io-client'

export const socket=Opensocket('http://localhost:4000',{transports: ['websocket']});
export const usernameSapce=Opensocket('http://localhost:4000/my-namespace',{transports: ['websocket']});

export  function onMessege(event,cb){socket.on(event,cb)  }

export function Emessage(ms){socket.emit('message',ms)}



