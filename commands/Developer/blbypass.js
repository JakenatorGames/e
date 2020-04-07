const db = require('quick.db')

module.exports = {
  config: {
    
    
    name: "blbypass",
    aliases: ["blb"]
    
    
  
},
  run: async(bot, msg, args) => {
    let dev = await db.fetch(`dev_${msg.author.id}`);
    if (msg.author.id !== dev) return msg.channel.send(":x: This can be only executed by a dev.")
    

    
    let a = args.join(' ')
    
    
    msg.channel.send("Added their id to blacklist bypass.")
        

    db.set(`blbypass_${a}`, a)
    
    
    
  }}