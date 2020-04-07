



const db = require('quick.db')
const ms = require('ms')
const Discord = require('discord.js')
var currencyFormatter = require('currency-formatter');
module.exports = {
  config: {
    name: "work",
    
    aliases: ["work", "Work"]
    
    
    
    
  
},
run: async(client, message, args) => {
  let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
       let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
if (args[0] == 'help') {
  let  m = new Discord.RichEmbed()
  .setTitle("Job List")
  
  .setDescription("prostitute, constructor, programmer")
  
  message.channel.send(m)

      let daily = await db.fetch(`money_${message.author.id}`);

  
  let timeout = 3600000 // 1 hour in milliseconds, DONT CHANGE 
  
   if (daily !== null && timeout - (Date.now() - daily) > 0) {

        let time = ms(timeout - (Date.now() - daily));



        message.channel.send(`You have already worked please come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)

  
  
}

  else  if (args[0] == 'prostitute') {



        let amount = Math.floor(Math.random() * 1000) + 1; // 1-500 random number. whatever you'd like



        let embed = new Discord.RichEmbed()

        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 

        .setDescription(`${message.author}, you worked as a prostitute & got payed ${amount}$ for having sex! :D`)

        .setColor("RANDOM")

        

    

        message.channel.send(embed)

        db.add(`money_${message.guild.id}_${message.author.id}`, amount)

    } else if(args[0] == 'constructor') {

        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like



        let embed = new Discord.RichEmbed()

        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 

        .setDescription(`${message.author}, you worked as a constructor & got payed ${amount}$ for rebuilding the empire state building.`)

        .setColor("RANDOM")

        

    

        message.channel.send(embed)

        db.add(`money_${message.guild.id}_${message.author.id}`, amount)

    } else if(args[0] == 'programmer') {

        let amount = Math.floor(Math.random() * 1000) + 1; // 1-500 random number. change to whatever you'd like



        let embed = new Discord.RichEmbed()

        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 

        .setDescription(`${message.author}, you worked as a programmer for epicgames, you fixed their game & earned ${amount}$!`)

        .setColor("RANDOM")

        

    

        message.channel.send(embed)

        db.add(`money_${message.guild.id}_${message.author.id}`, amount)

    } else if (args[0] === 'judge') {
      
      
      let amount = Math.foor(Math.random() * 20000) + 400;
      
      let d = new Discord.RichEmbed()
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
      
      .setDescription(`${message.author}, you worked as a judge and earned $${amount}`)
      
      
      
      db.add(`money_${message.guild.id}_${message.author.id}`, amount)
    }













    // simple work command

    /*

    let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number.



    let embed = new Discord.RichEmbed()

    .setAuthor(`${message.author.tag}, it payed off!`, message.author.displayAvatarURL) 

    .setDescription(`${message.author}, you've worked and earned ${amount}$ !`)

    .setColor("RANDOM")

    



    message.channel.send(embed)

    db.add(`money_${message.author.id}`, amount)

    */





}

  
}}