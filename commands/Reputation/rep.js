const Discord = require('discord.js')

const db = require('quick.db')
module.exports = {
  config: {
    
    name: "rep",
    aliases: ["rep", "Rep"]
    
    
    
  
},
run: async(client, msg, args) => {
  
 let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
     let n = await db.fetch(`gban_${msg.guild.id}`)
    if (msg.guild.id === n) return msg.channel.send("Error, your guild is blacklisted.")
    
  let user = msg.mentions.members.first() || msg.author;
  let m = await db.fetch(`rep_${user.id}`)
    
if(m === null) m = "Guess people do not respect this user."

  let d = new Discord.RichEmbed()
  .setTitle("Reputation Points")
  .addField("User", `${user}`)
  .addField("Points", `${m}`)
  msg.channel.send(d)
}}