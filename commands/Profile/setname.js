let Canvas = require('canvas')

let Discord = require('discord.js')

let db = require('quick.db')

module.exports = {
config: {
  name: 'setname',

  description: 'Shows the current user\'s information',

  usage: ' <user> (optional)',

  category: 'misc',
  aliases: ["Setname", "rpname"]
},
  
  
  run: async(client, message, args) => {
     let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
    
       let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
    let user = message.author;
let a = args.join(' ')
    let kk = await db.fetch(`userInfo_${user.id}.rpn`)

    let m = new Discord.RichEmbed()
    .setTitle("Updated Bio")
    .addField("New Name", `${a}`)
    db.set(`userInfo_${user.id}.rpn`, a)
    message.channel.send(m)
  }}