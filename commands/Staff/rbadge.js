const db = require('quick.db')
const ms = require('ms')
const Discord = require('discord.js')

module.exports = {

    config: {

        name: "removebadge",

        description: "works",

        usage: "*rbadge staff @user",

        accessableby: "Developers",

        aliases: ["rb","Rbadge","rbg", "removeb", "removebadge", "rbadge"]

    },
  run: async (bot, message, args) => {
    if (message.member.id !== '343586271257427968') return message.channel.send("No.")
    let user = message.mentions.members.first()

 if (args[0] == 'help') {
  
  
  let m = new Discord.RichEmbed()
  .setTitle("Badge List")
.addField("founder", 'Identifies the owner of snoop. Only 2 users have this.')
  .addField("staff", 'Identifies staff members.')
  .addField("Admin", 'Identifies a user apart of the administration staff.')
  .addField("Helper", 'Shows helpers for snoop.')
  .setColor('RANDOM')
  
message.channel.send(m)
  
  
  
}
 if (args[0] == 'helper') {
  
  
message.channel.send(`:white_check_mark: Removed the helper badge from ${user}`)
  
  db.set(`helper_${user.id}`, 'False')
}

    

   else if (args[0] == 'Founder') {



   


        let embed = new Discord.RichEmbed()

       .setTitle("Removed Badge")
        .setDescription(`:white_check_mark:  I added the founder badge to ${user}`)

        .setColor("RANDOM")

        

    let m = 'True';

        message.channel.send(embed)

        db.set(`fb_${user.id}`, m)

    } else if (args[0] == 'staff') {
let t = 'False';
       
        let embed = new Discord.RichEmbed()

.setTitle("Removed Badge")
        .setDescription(`:white_check_mark: I have removed the badge staff removed ${user}`)

        .setColor("RANDOM")

        

    

        message.channel.send(embed)

        db.set(`staff_${user.id}`, t)

    } else if (args[0] == 'admin') {

        let am = await db.fetch(`adminb_${user.id}`)// 1-10000 random number. change to whatever you'd like
let a = 'False';


        let embed = new Discord.RichEmbed()

      .setTitle("Removed Badge")

        .setDescription(`:white_check_mark: I removed the  Administrator  Badge from ${user}!`)

        .setColor("RANDOM")

        

    

        message.channel.send(embed)

        db.set(`adminb_${user.id}`, 'True')

    }
    
    
    
  
}}