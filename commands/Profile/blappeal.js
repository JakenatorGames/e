const db = require('quick.db')
const ms = require('ms')
const { RichEmbed } = require('discord.js')

module.exports = {
  config: {
    
    
    name: "blappeal",
    
    aliases: ["bla"]
    
    
  
},
  run: async(bot, msg, args) => {
    let timeout = 120000
    let daily = await db.fetch(`da_${msg.author.id}`);




    // random amount: Math.floor(Math.random() * 1000) + 1;




    if (daily !== null && timeout - (Date.now() - daily) > 0) {

        let time = ms(timeout - (Date.now() - daily));



        msg.channel.send(`You already appealed, you can reappeal in **2 minutess**!`)

    }
    if (args[0] === 'check') {
      let d = await db.fetch(`blid_${msg.author.id}`)
      if(d === null) d = "False"
      let m = new RichEmbed()
      .setTitle("Blacklisted?(Shows your id if true)")
      .addField('How to appeal?', 'Use *blappeal then put the reason why we should unblacklist you.')
      
      .setDescription(d)
      
      msg.channel.send(m)
    }
    let n = args.join(' ')
    let dd = new RichEmbed()
    .setTitle("Blacklist Appeal")
    .addField("Name", `${msg.author.username}`)
    .addField("Tag", `${msg.author.tag}`)
    
    .addField("ID", `${msg.author.id}`)
    
    .addField("Reason", n)
    
    
    bot.users.get('343586271257427968').send(dd)
    db.set(`da_${msg.author.id}`, Date.now())
  }}