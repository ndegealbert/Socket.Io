
function  clientonConnect(){
  function connect(){
    client.emit('news',{news:"latest news from all the word "})
  
  //client
  client.on('disconnect', function () {
      console.log('client disconnect...', client.id)
  }

    )}}
  
module.exports =  clientonConnect