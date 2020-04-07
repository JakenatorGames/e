const db = require('quick.db')
const ms = require('ms')
const Discord = require('discord.js')

module.exports = {

    config: {

        name: "dwork",

        description: "works",

        usage: "*dwork",

        accessableby: "Developers",

        aliases: ["devwork","Owork","Ownerwork"]

    },
  run: async (bot, message, args) => {
    let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
    if (message.member.id !== '343586271257427968') return message.channel.send("No.")
    
    let amount = await db.fetch(`money_${message.author.id}`);

let timeout = 0 // 24 hours in milliseconds, change if you'd like.
 


 if (args[0] == 'help') {
  
  
  let m = new Discord.RichEmbed()
  .setTitle("Jobs")
  .setDescription("`prostitute, constructor, programmer`")
  
  .setColor('RANDOM')
  
message.channel.send(m)
  
  
  
}

    

   else if (args[0] == 'wd') {



        let amount = Math.floor(Math.random() * 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999) + 1; // 1-500 random number. whatever you'd like



        let embed = new Discord.RichEmbed()

        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 

        .setDescription(`${message.author}, you worked as a marijuana dealer and got payed ${amount} in california. :D`)

        .setColor("RANDOM")

        

    

        message.channel.send(embed)

        db.add(`money_${message.author.id}`, amount)

    } else if(args[0] == 'staff') {

        let amount = Math.floor(Math.random() * 999999999999999999999999999999999999999999999999999999999999999999999999999999999999) + 1; // 1-500 random number. whatever you'd like



        let embed = new Discord.RichEmbed()

        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 

        .setDescription(`${message.author}, you worked as a staff member & got payed ${amount}$.`)

        .setColor("RANDOM")

        

    

        message.channel.send(embed)

        db.add(`money_${message.author.id}`, amount)

    } else if(args[0] == 'dev') {

        let amount = Math.floor(Math.random() * 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999) + 20000;// 1-10000 random number. change to whatever you'd like



        let embed = new Discord.RichEmbed()

        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 

        .setDescription(`${message.author}, you worked as a programmer for Snoop, you fixed their game & earned ${amount}$!`)

        .setColor("RANDOM")

        

    

        message.channel.send(embed)

        db.add(`money_${message.author.id}`, amount)

    }
    
    
    
  
}}