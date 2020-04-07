const { RichEmbed } = require('discord.js')

module.exports = {

    config: {

        name: "addpartner",

        description: "*addpartner @user",


    },
run: async(client, msg, args) => {
        const db = require('quick.db')
   let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
    let n = await db.fetch(`gban_${msg.guild.id}`)
    if (msg.guild.id === n) return msg.channel.send("Error, your server id is blacklisted.")
    
  
  let d = await db.fetch(`partnerstaff_${msg.author.id}`)
  if (msg.member.id !== d) return;
  
  
  
  let f = new RichEmbed()
  .setTitle("Partnered Server")
  .setDescription(`Name: ${msg.guild.name}

ID: ${msg.guild.id}

Partnered on: ${msg.createdAt}

Owner: ${msg.guild.owner}

Staff Member Responsible: ${msg.author.tag}

`)
  
  
  
  .setColor('GREEN')
  
  client.channels.get('655099918519894016').send(f)
  msg.channel.send("Now partnered.")
   msg.channel.createInvite({maxAge: 0}).then(inv => 
                                    client.channels.get('655099918519894016').send(`https://discord.gg/${inv.code}`))
  
  
  
  
}}