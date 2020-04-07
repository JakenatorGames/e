const db = require('quick.db')
const ms = require('ms')
const Discord = require('discord.js')

module.exports = {

    config: {

        name: "addbadge",

        description: "works",

        usage: "*addbage staff @user",

        accessableby: "Developers",

        aliases: ["addb","badd","ab"]

    },
  run: async (bot, message, args) => {
    let rr = await db.fetch(`dev_${message.author.id}`)
    if (message.author.id !== rr) return message.channel.send("> :x: You do not have permissions.")
    
    
    
    
    let user = message.mentions.members.first()

 if (args[0] == 'help') {
  
  
  let m = new Discord.RichEmbed()
  .setTitle("Badge List")
  .addField("founder", 'Identifies the owner of snoop. Only 2 users have this.')
  .addField("Developer", 'Shows who is an official Snoop Developer.')
  .addField("System Admin", 'Indentifies a system admin.')
  .addField("staff", 'Identifies staff members.')
  .addField("Admin", 'Identifies a user apart of the administration staff.')
  .addField("Helper", 'Shows helpers for snoop.')
  .setColor('RANDOM')
  
message.channel.send(m)
  
  
  
}
 if (args[0] == `helper`) {
  
  
  let m = new Discord.RichEmbed()
  .setTitle("Added Badge")
.setDescription(`:white_check_mark: Added the helper badge to ${user}`)
  
message.channel.send(m)
  
  
  db.set(`helper_${user.id}`, 'True')
}

    

   else if (args[0] == 'Founder') {



   


        let embed = new Discord.RichEmbed()

       .setTitle("Added Badge")
        .setDescription(`:white_check_mark:  I added the founder badge to ${user}`)

        .setColor("RANDOM")

        

    let m = 'True';

        message.channel.send(embed)

        db.set(`fb_${user.id}`, m)

    } else if (args[0] == 'staff') {
let t = 'True';
       
        let embed = new Discord.RichEmbed()

.setTitle("Added Badge")
        .setDescription(`:white_check_mark: I have added the badge staff to ${user}`)

        .setColor("RANDOM")

        

    

        message.channel.send(embed)

        db.set(`staff_${user.id}`, t)

    } else if (args[0] == 'admin') {

        let am = await db.fetch(`adminb_${user.id}`)// 1-10000 random number. change to whatever you'd like
let a = 'True';


        let embed = new Discord.RichEmbed()

      .setTitle("Added Badge")

        .setDescription(`:white_check_mark: I added the > Administrator < Badge to ${user}!`)

        .setColor("RANDOM")

        

    

        message.channel.send(embed)

        db.set(`adminb_${user.id}`, 'True')

    }
    else if (args[0] === 'sysadmin') {
      
      
      let dda = await db.fetch(`sysadmin_${user.id}`)
      let k = new Discord.RichEmbed()
      .setTitle("Added Badge")
      .setDescription(`I have added the System Administrator badge to ${user}`)
      message.channel.send(k)
      db.set(`sysadmin_${user.id}`, 'True', true)
      
    }
    else if (args[0] === 'dev') {
      
      let aa = await db.fetch(`dev_${user.id}`)
      
      let d = new Discord.RichEmbed()
      .setTitle("Added Badge")
      .setDescription(`I have added the Developer badge to ${user}`)
      
      message.channel.send(d)
      db.set(`dev_${user.id}`, user.id, true)
      
    }
    else if (args[0] === 'blperms') {
      
      
      
      
      message.channel.send(`I gave ${user} blacklist perms.`)
      
      db.set(`blperms_${user.id}`, user.id, true)
      
      
      
      
      
    }
    else if (args[0] === 'ps') {
      let m = new Discord.RichEmbed()
      .setTitle("Added Badge")
      
      .setDescription(`I have added the Partnership Staff member badge to ${user}`)
      
      
      message.channel.send(m)
      
      db.set(`partnerstaff_${user.id}`, user.id, true)
      
    }
    else if (args[0] === 'XMAS') {
      
      
      message.channel.send("Added this badge to them.")
      
      
      db.set(`xmas_${user.id}`, 'True')
      
      
      
    }
    
  
}}