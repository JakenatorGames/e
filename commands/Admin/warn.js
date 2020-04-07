var fs = require('fs'); //FileSystem



const Discord = require('discord.js');

module.exports = {
  
  
  config: {
    name: "warn",
    
    aliases: ["Warn", "warn"]
    
    
  
},

run: async(client, message, args) => {

  
  
      const db = require('quick.db')
   let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
   let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You need `MANAGE_MESSAGES` to warn.')
  
  
  let reasons = [

    "``I'm sorry, friend, but someone's stray hand today``",

    "``Ha, you got warned.``",

    "``Just because I feel like it.``",

    "``Breaking Rules.``",

    "``You asked for it.``",

    "``Deserved it.``",
    
    "``Just had it coming.``"

  ];


let reason = args.slice(1).join(' ');

  if (!reason) reason = reasons[Math.floor(Math.random() * reasons.length)];

let user = message.mentions.members.first();
  
  if (!user) return message.channel.send(`Please mention someone to warn.`);
  
  let m = await db.fetch(`warncount_${user.id}`)
  
  
  let warned = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setTitle("Warned User")
  .addField('Warned', `${user}`)
  .addField('Moderator', `${message.author.tag}`)
  .addField("Reason", reason, true)
  .addField("Date Warned", `${message.createdAt}`)
.setFooter(`Warned User`, client.user.avatarURL)
    let warnChannel = message.guild.channels.find(`name`, "warnings");



    if(!warnChannel) return message.channel.send("Can't find the warnings channel.");

user.send(`You have been warned in ${message.guild.name} because ${reason} on ${message.createdAt}`)
message.channel.send('Warned user!')
warnChannel.send(warned)
message.delete()
  db.add(`warncount_${user.id}`, 1)
  
}}
  // Inform devs that V3 is in progress
  
  

