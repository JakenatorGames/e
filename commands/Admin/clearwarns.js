var fs = require('fs'); //FileSystem

const Discord = require('discord.js');

const db = require("quick.db");


module.exports = {
  
  
  config: {
    name: "cwarns",
    
    aliases: ["cWarnings", "cwarns", "clearwarn", "Clearwarn", "cw"]
    
    
  
},

run: async(client, message, args) => {

    const db = require('quick.db')
   let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
 let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
    let user = message.mentions.members.first() || message.author;
let warn = await db.fetch(`warncount_${user.id}`);
  
  if (warn === null) warn = '0'
  
  let d = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setTitle(`Warn Count for ${user}`)
  .setDescription(`

**Warns**    **User**
 0     -    ${user}
`)
  .setColor('RANDOM')
  
  
  message.channel.send('Reset this users warn count.')
  message.delete()
  
  db.set(`warncount_${user.id}`, 0)
}}