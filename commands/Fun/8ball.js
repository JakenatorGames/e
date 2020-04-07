const Discord = require("discord.js");

module.exports = {

    config: {

        name: "8ball",

        description: "8ball that is a bitch",
aliases: ["8bal", "8Ball"]

    },
  run: async (bot, message, args) => {
    


   if(!args[2]) return message.channel.send(`${message.author.tag},  Please ask a full question!`);



   let replies = ["Yes.", "No.", "Not today", "I don't know"];







   let result = Math.floor((Math.random() * replies.length));



   let question = args.slice(0).join(" ");







   let ballembed = new Discord.RichEmbed()

   

   .setTitle(`${message.author.tag} asked:`)



   .setColor("#00fff2")



   .addField("**❯ Question**", question)

.setTimestamp() //It will apear at the bottom btw trust me
.setFooter('Snoop`s 8ball', bot.user.avatarURL)
   .addField("**❯ Answer**", replies[result]);
    
    
    







   message.channel.send(ballembed);



}
    
   
    
    }
