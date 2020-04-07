const Discord = require("discord.js");

const db = require("quick.db");




module.exports = {
  config: {
    name: "sm",
    
    aliases: ["reset-money", "rsm", "setm", "Setm"]
    
    //better-sqlite
    
    
  
},
  
  run: async(client, message, args) => {
   let user = message.mentions.members.first() 
      if (!user) {

        return message.channel.send('Sorry, you forgot to mention somebody.')

    }
if (message.member.id !== '343586271257427968') return message.channel.send("No.")
    
    let a = args.join(' ')
    
    let m = await db.fetch(`money_${user.id}`)
    
    
    let me = new Discord.RichEmbed()
    .setTitle("Money set")
    .addField("To", `0`)
    
    message.channel.send(me)
    
    user.send("Your money was reseted by a dev")
    
    db.set(`money_${user.id}`, 0)
    message.delete()
  }}