const Discord = require('discord.js')

const db = require('quick.db')


module.exports = {
  config: {
    
    name: "buy"
    
    
  
},
run: async(client, message, args) => {




    let author = db.fetch(`money_${message.guild.id}_${message.author.id}`)
   




    if (args[0] == 'phone') {

             let amount = Math.floor(Math.random() * 1) + 1; // 1-500 random number. change to whatever you'd like

            let author = db.fetch(`phone_${message.guild.id}_${message.author.id}`)

        if (author < 700) return message.channel.send('You need atleast `700$` to purchase a phone.') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store

      


        db.subtract(`money_${message.guild.id}_${message.author.id}`, 700)
       
         db.add(`phone`, 1)        

        message.channel.send(message.author.tag + ' You successfully bought the phone for `700$`')
      
           db.add(`phone_${message.guild.id}_${message.author.id}`, amount)


    } else if(args[0] == 'laptop') {

      
      let amount = Math.floor(Math.random() * 1) + 1; // 1-500 random number. change to whatever you'd like

      let author = db.fetch(`laptop_${message.guild.id}_${message.author.id}`)

  
        if (author < 1800) return message.channel.send('You need atleast `1800$` to purchase a laptop.') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store

    


        db.subtract(`money_${message.guild.id}_${message.author.id}`, 1800)

        db.add(`laptop`, 1)        

        message.channel.send(message.author.tag + ' You successfully bought a laptop for `1800$`')
      
        db.add(`laptop_${message.guild.id}_${message.author.id}`, amount)

      
      }
      else if (args[0] === 'house') {
                 
        let amount = Math.floor(Math.random() * 1) + 1; // 1-500 random number. change to whatever you'd like

        let author = db.fetch(`house_${message.guild.id}_${message.author.id}`)

        if (author < 20000) return message.channel.send('You need $20,000 to buy a house.')
        
        db.subtract(`money_${message.guild.id}_${message.author.id}`, 20000)
        
                 db.add(`house`, 1)        

        
        message.channel.send(message.author.tag + ' You successfully bought a house for `20,000$`')
        
                db.add(`house_${message.guild.id}_${message.author.id}`, amount)

      
    }
      else if (args[0] === 'penthouse') {
        

         let amount = Math.floor(Math.random() * 1) + 1; // 1-500 random number. change to whatever you'd like


         let author = db.fetch(`penthouse_${message.guild.id}_${message.author.id}`)
        
        if (author < 200000) return message.channel.send('You need $200,000 to buy a penthouse.')
        
        db.subtract(`money_${message.guild.id}_${message.author.id}`, 200000)
   

         db.add(`penthouse`, 1)        
        
        message.channel.send(message.author.tag + ' You successfully bought a penthouse for `200,000$`')
        
        db.add(`penthouse_${message.guild.id}_${message.author.id}`, amount)

        
        
        
        
      }

    }











}