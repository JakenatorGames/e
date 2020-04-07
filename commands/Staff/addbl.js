const db = require('quick.db')
const ms = require('ms')
const Discord = require('discord.js')

module.exports = {

    config: {

        name: "addbl",

        description: "works",

        usage: "*bage staff @user",

        accessableby: "Developers",

        aliases: ["bladd","addbl","bl"]

    },
  run: async (bot, message, args) => {
   
let admin = await db.fetch(`blperms_${message.author.id}`)
    
    if (message.member.id !== admin) return message.channel.send(":x: Only system admins or above can use this.")
   let user = message.mentions.members.first()
   let d = await db.fetch(`fb_${user.id}`)
if (user.id === d) return message.channel.send("Nope. Not blacklisting them.")
    if (user.id === message.author.id) return message.channel.send("You can not blacklist yourself.")
    let re = args.join(' ').slice(22)
   
    let m = new Discord.RichEmbed()
    .setTitle("Blacklisted User")
    .addField("User", `${user}`, true)
    .addField("ID", `${user.id}`)
    .addField("Reason", `${re}`)
    

    message.channel.send(m)
        db.set(`blid_${user.id}`, user.id)
    db.set(`reason_${user.id}`, re)
  }}