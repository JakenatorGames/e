const Discord = require('discord.js')

const db = require('quick.db')


module.exports = {
  config: {
    
    name: "resetmoney"
    

    
    
  
},
run: async(client, message, args) => {
    
  let d = await db.fetch(`dev_${message.author.id}`)
    
    if (message.author.id !== d) return message.channel.send(":x: Failed | Unable to reset money for this user's balance because you are not authorized.")




    let author = db.fetch(`money_${message.guild.id}_${message.author.id}`)



    if (args[0] == 'me') {

       
        if (author < 10000) return message.channel.send('You need to have atleast `10000$` to reset money') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store

      


        db.subtract(`money_${message.guild.id}_${message.author.id}`, 999999999999999999999999999999999999)

        message.channel.send(message.author.tag + ' ✅ Success | Reseted money')





    }
  
}}