const db = require('quick.db')

//GRIM I FIGUERED IT OUT I MADE AN MAGIC 8BALL SCRIPT I DID IT IM SO SMART THIS TOOK FOREVER
module.exports = {
  config: {
    
    name: "addm"
    //Do not ?
  //k but can you fix something snoop hates me.
},//...............................................................?...??.??..????...???..??.??..???..???.?? ???????????????????
  run: async(bot, msg) => {
    let d = await db.fetch(`dev_${msg.author.id}`)
    
    if (msg.author.id !== d) return msg.channel.send(":x: Failed | Unable to add money to this user's balance because you are not authorized.")
     let amount = Math.floor(Math.random() * 99999999999999999) + 999999; // 1-500 random number. whatever you'd like
let user = msg.mentions.members.first() || msg.author
    msg.channel.send(`:white_check_mark: Success | Added $${amount} to ${user}`)
    
        db.add(`money_${msg.guild.id}_${msg.author.id}`, amount)
    
  }}