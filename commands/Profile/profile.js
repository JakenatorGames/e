let Canvas = require('canvas')

let Discord = require('discord.js')

let db = require('quick.db')

module.exports = {
config: {
  name: 'profile',

  description: 'Shows the current user\'s information',

  usage: ' <user> (optional)',

  category: 'misc',
},
  
  
  run: async(client, message, args) => {
 let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
       let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
    let user = message.mentions.users.first() || message.author;

  


  

    

    let emojis = {

      dnd: "Do not disturb",

      offline: "Offline",
//Professional
      online: "Online",

      idle: "Idle",
      
      custom: "Custom Status" //I am fixing 8ball I will put it in snoop when its complete and looks professional
      
      //There should be a custom status
//you too
    };
let kk = await db.fetch(`userInfo_${user.id}.rpn`)




     if(kk === null) kk = "No rp name set."
    
    

    let pres = emojis[user.presence.status];
    
    
    

    let kok = await db.fetch(`userInfo_${user.id}.bio`)
    
    
    

    if(kok === null) kok = "No bio set.";
    
    
    
    
   let output = await db.fetch(`money_${user.id}`)
   
   

if(output === null) output = "0"
 let kc = await db.fetch(`staff_${user.id}`)
 
 
 
 
 

if(kc === null) kc = "False"
 let kd = await db.fetch(`fb_${user.id}`)
 
 
 

if(kd === null) kd = "False"
     let blid = await db.fetch(`blid_${user.id}`)
     
     

if(blid === null) blid = "False, it will show an id if True.";
    
    
    
    
    message.channel.send(new Discord.RichEmbed() 

                        .setAuthor(`${user.username}`)

                        .setThumbnail(user.displayAvatarURL)

                        .setColor(client.color)
                         .addField("Blacklisted?", blid)
                        .addField("Roleplay Name", `${kk}`)
                         
                        .addField('Balance', `${output}`)

                        .addField('Status', pres, true)

                        .addField('Bio', kok)
                         
                         .addField("Staff Member?", kc)
                         .addField("Founder of Snoop?", kd)

                        

                        )

  }

}