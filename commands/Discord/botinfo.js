const Discord = require("discord.js");





module.exports = {
  config: {
    
    name: "botinfo"
    
    
    
  
},

run: async (bot, message, args) =>{




    
    
      const db = require('quick.db')
   let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
    let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
    
    
    



  let bicon = bot.user.displayAvatarURL;







  let botembed = new Discord.RichEmbed()







  .setAuthor("❯ Snoop", bicon)







  .setColor("#00fff2")







  .setThumbnail(bicon)







  .addField("**❯ Author**", "Death#2185") //STOP MAKING OWNERSHIP TO YOU



//It IS API OWNER!



  .addField("**❯ Library**", "discord.js",true)







  .addField("**❯ Version**", "2.8.0",true)







  .addField("**❯ Invite**", `[Link](https://discordapp.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot)`, true)

.addField("**❯ Commands**", `${bot.commands.size}`, true)


.addField("**❯ Memory Usage**", `171/512 MB!`, true)


  .addField("**❯ Created On**", bot.user.createdAt.toDateString(), true);















  return message.channel.send(botembed);







}



}


