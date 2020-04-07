
const Discord = require("discord.js");

const db = require('quick.db');



var fs = require('fs');

module.exports = {

    config: {

        name: "balance",

        description: "Shows the balance of you or other players.",

        usage: "*balance <name> | Default: You",

        accessableby: "Members",

        aliases: ["bal", "blnc", "BAL"]

    },

    run: async(bot, message, args) => {

   let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
   let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
      let dd = await db.fetch(`userInfo_${message.author.id}.rpn`)

   
let user = message.mentions.members.first() || message.author
    if (dd === null) dd = 'Nothing'
      
    let money = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

let d = new Discord.RichEmbed()
.setThumbnail(user.avatarURL)
.setTitle("Bank")
.addField("Balance", `${money}`)
.addField("User", `${user}`)

    message.channel.send(d)




}}