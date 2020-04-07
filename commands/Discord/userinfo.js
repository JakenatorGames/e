const Discord = require('discord.js')



module.exports = {
  config: {
    name: "userinfo"
  
},
  run: async(bot, message, args) => {
    
    let user = message.mentions.users.first() || message.author;
    
    
    let d = new Discord.RichEmbed()
    
     .setThumbnail(user.avatarURL)
    
    .setTitle(`User Information`)
    
    .setDescription(`


**Name:** ${user}

**Discriminator:** #${user.discriminator} 

**ID:** ${user.id}

**Account Created:** ${user.createdAt}





`)
    
    message.channel.send(d)
    
  }}