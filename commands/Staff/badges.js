const db = require('quick.db')
const ms = require('ms')
const Discord = require('discord.js')

module.exports = {

    config: {

        name: "badges",

        description: "works",

        usage: "*bage staff @user",

        accessableby: "Developers",

        aliases: ["badge","Badges","bg"]

    },
  run: async (bot, message, args) => {
   
    let user = message.mentions.members.first();
  if (args[0] === 'list') {
    
    
    
    let m = new Discord.RichEmbed()
    .setTitle("Badge List")
    .addField("Founder", 'Only Death#2184 and Jakenator Games#9677 have this badge.')
    .addField("Admin", 'Shows official members of the administration team.')
    .addField("Staff", 'Shows official staff members.')
    .setDescription("To see a badge, please use *badges admin @user for example | Or *badges staff @user")
    
    message.channel.send(m)
  }
    
 else if (args[0] == 'Founder') {



   let f = await db.fetch(`fb_${user.id}`)
     if(f === null) f = "False";



        let embed = new Discord.RichEmbed()

        .setTitle(`${user}`)
.addField("Has Founder badge?", `${f}`)
        .setColor("RANDOM")

        

    

        message.channel.send(embed)

     

    } else if (args[0] == 'staff') {
   let ks = await db.fetch(`staff_${user.id}`)
     if(ks === null) ks = "False";

        let embed = new Discord.RichEmbed()

        .setTitle(`${user}`)
        .addField("Has staff badge?", `${ks}`)
        .setColor("RANDOM")

        

    

        message.channel.send(embed)

    
    } else if(args[0] == 'admin') {

     
let kk = await db.fetch(`adminb_${user.id}`)
     if(kk === null) kk = "False"

        let embed = new Discord.RichEmbed()

        .setTitle(`${user}`)

        .addField("Has admin badge?", `${kk}`)
        

        .setColor("RANDOM")

        

    

        message.channel.send(embed)

        db.fetch(`adminb_${message.author.id}`, kk)

    }
    
    
    else if(args[0] == 'helper') {

     
let k = await db.fetch(`helper_${user.id}`)
     if(k === null) k = "False"

        let embed = new Discord.RichEmbed()

        .setTitle(`${user}`)

        .addField("Official Helper?", `${k}`)
        

        .setColor("RANDOM")

        

    

        message.channel.send(embed)

        
    }
    
  
}}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  