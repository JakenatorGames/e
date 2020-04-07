const { RichEmbed } = require('discord.js')
module.exports = {
  config: {
    
    
    
    name: "gay"
  
},
  run: async(bot, message, args) => {
    
    
    
    
    
    
    
    
let memberToFind = message.mentions.members.first();

    let gay = Math.round(Math.random() * 100);



    if (!memberToFind) {

    return message.channel.send('Please Mention a User.');
//I do not like the errors 
  }

    

    let gayembed = new RichEmbed()

        .setColor("#f442d4")

        .setTitle(`:gay_pride_flag: **I think ${message.mentions.members.first().displayName} is ${gay}% gay!** :gay_pride_flag:`);

    message.delete(10);

    return message.channel.send(gayembed);

}
    
    
    
    
    
    
    
    
  }
  
  
  
  
  
  
  
  


