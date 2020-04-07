const { RichEmbed } = require('discord.js')

const db = require('quick.db')


const ms = require('ms')
module.exports = {
  config: {
  name: "-rep",
  aliases: ["-Rep", "removerep"]
},
run: async (client, msg, args) => {
  
//So what do you want me to do???????????????????
 let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
     let n = await db.fetch(`gban_${msg.guild.id}`)
    if (msg.guild.id === n) return msg.channel.send("Error, your guild is blacklisted.")
    
  let user = msg.mentions.members.first() 


    if(user.id === msg.author.id) return msg.channel.send("You can't remove your reputation yourself.");

  if(msg.author.id === process.env.id){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
        if(msg.guild.id === process.env.gid) {
        return msg.channel.send('**You guild id is on the blacklist, use *blappeal if wanting it to be removed.**')
    }
  

    let timeout = 300000; // 24 hours in milliseconds, change if you'd like.


 let daily = await db.fetch(`reps_${msg.author.id}`);




    // random amount: Math.floor(Math.random() * 1000) + 1;




    if (daily !== null && timeout - (Date.now() - daily) > 0) {

        let time = ms(timeout - (Date.now() - daily));



        msg.channel.send(`You already removed reputation from someone, please wait 5 minutes.**!`)

    } else {

    let embed = new RichEmbed()
.setTitle("Reputation")
    .setDescription(`Removed 1 reputation point from ${user}`)
    msg.channel.send(embed)

    db.subtract(`rep_${user.id}`, 1)

    db.set(`reps_${msg.author.id}`, Date.now())

        

    }




}
}