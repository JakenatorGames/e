
const Discord = require('discord.js')

const db = require('quick.db')



module.exports = {
  config: {
    
    
    
     name: "store"
    
  
},
run: async(client, message, args) => {




     

    let embed = new Discord.RichEmbed()

    .setTitle(`${client.user.tag} Store!`)

    .setDescription('**Use *buy <item> to buy!**')

    .addField(`📱`, '`700$`\nGives you a phone!')

    .addField(`💻`, '`1800$`\nGives you a laptop!') // can add up to 25(I believe)
    
    .addField(`🏡`, '`20,000$`\nGives you a house!')
    
    .addField(`🏨`, '`200,000$`\nGives you a penthouse!') // can make multiple stores by making a command name store and then tells you store1 store2 kinda like help if you run out


    .setColor("#f2f4f7") 



    message.channel.send(embed)







}}