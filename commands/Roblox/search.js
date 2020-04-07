const Discord = require('discord.js')

const roblox = require('noblox.js')
const db = require('quick.db')
module.exports = {

    config: {

        name: "search",

        description: "Shows a roblox profiles information.",

        usage: "*search example",

        accessableby: "everyone",

        aliases: ["srch"]

    },
  run: async(client, message, args) => {
    
 let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
    
         let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    

    
  let username = args[0]



 if (username) {



   roblox.getIdFromUsername(username).then(id => {



     if (id) {



       roblox.getPlayerInfo(parseInt(id)).then(function(info) {



         let date = new Date(info.joinDate)



         let dateInfo = date



         let embed = new Discord.RichEmbed()







         .setColor("#7700ff")



         .setURL(`https://roblox.com/users/${id}/profile`)



         .setTimestamp()



         .setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)



         .addField("Username", info.username || 'Unresolvable', true)



         .addField("User ID", id || 'Unresolvable', true)



         .addField("Description", info.blurb || 'Nothing', true)



         .addField("Status", info.status || 'Nothing', true)



         .addField("Account Age", `${info.age} days old` || 'Unresolvable')



         .addField("Register Date", `${dateInfo.month}/${dateInfo.day}/${dateInfo.year}` || 'Unresolvable')



         .addField("User Link", `https://roblox.com/users/${id}/profile`)



         .setFooter(`Snoops Roblox`, client.user.avatarURL)



          message.channel.send({embed})



       })



     }







   }).catch(function (err) {



     message.channel.send("Sorry, that user doesn't seem to exist, double check your spelling and try again!" + client.responseEmojis)



   });



} else {



   message.channel.send("Please provide a valid username, e.g. '~search ROBLOX'.")



 }



    }




    
  };