const { RichEmbed } = require('discord.js')



module.exports = {
  config: {
    
    name: "reverse",
    aliases: ["Reverse"]
    
  
}, 
  run: async(bot, msg, args) => {
    
    
    
    
    

    if (args.length < 1) {



        throw '[ERROR 233]';



    }



    msg.reply(args.join(' ').split('').reverse().join(''));











}


    
    
    
    
    
  }
  
  
  
  
  
  
  
  
