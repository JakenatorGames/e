


const { RichEmbed } = require('discord.js')

let g = '343586271257427968'

module.exports = {
  config: {
    name: "usercount",
    
    aliases: ["Botcount", "count"]
    
    
    
  
},
  
  run: async(client, message, args) => {
        const db = require('quick.db')
   let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
    if (message.member.id !== g) return;
    
    
    
    let m = new RichEmbed()
    .setTitle("Count")
    .addField("User's",`${client.users.size} Users!`)
    .addField("Guilds", `${client.guilds.size}`)
    .setColor('BLUE')
    
    message.channel.send(m)
    
  }}