
const Discord = require("discord.js");

const db = require('quick.db');



var fs = require('fs');

module.exports = {

    config: {

        name: "inventory",

        description: "Shows the balance of you or other players.",

        usage: "*balance <name> | Default: You",

        accessableby: "Members",

        aliases: ["inven", "i", "I", "Inventory"]

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
let pp = await db.fetch(`penthouse_${message.guild.id}_${message.author.id}`)
    
   
  
    if (pp === null) pp = 'Does not own a penthouse'
      
    let penthouse = await db.fetch(`penthouse_${message.guild.id}_${message.author.id}`)
    
    
    //SECOND

let hh = await db.fetch(`house_${message.guild.id}_${message.author.id}`)
    
   
  
    if (hh === null) hh = 'Homeless'
      
    let house = await db.fetch(`house_${message.guild.id}_${message.author.id}`)
    
    
    //THIRD
    
    
    let ll = await db.fetch(`laptop_${message.guild.id}_${message.author.id}`)
    
   
  
    if (ll === null) ll = 'No Laptops'
      
    let laptop = await db.fetch(`laptop_${message.guild.id}_${message.author.id}`)
    
    
    //FOURTH
    
        let p = await db.fetch(`phone_${message.guild.id}_${message.author.id}`)
    
   
  
    if (p === null) p = 'No Phones'
      
    let phone = await db.fetch(`phone_${message.guild.id}_${message.author.id}`)
    
    
    
    
    
    
    

let d = new Discord.RichEmbed()
.setThumbnail(user.avatarURL)
.setTitle("Inventory")
.addField("🏨Penthouses🏨", `${pp}`)
.addField("🏡Houses🏡", `${hh}`)
.addField("💻Laptops💻", `${ll}`)
.addField("📱Phones📱", `${p}`)
.addField("User", `${user}`)

message.channel.send(d)




}}