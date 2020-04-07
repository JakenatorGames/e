
const db = require('quick.db')

module.exports = {
  config: {
    
    name: "hackban",
    aliases: ["hb"]
    
  },
  run: async(bot, msg, args) => {
    
    
    let dev = await db.fetch(`dev_${msg.author.id}`)
    if (msg.author.id !== dev) return msg.channel.send(`:x: You are not a developer.`)
    
    
    
    
    
    
    let id = args.shift();
    
    if (!id)  return msg.channel.send(`Please supply an id to hackban!`)
    
    let reason = args.join()
    if (!reason) return msg.channel.send("Please supply a reason.")
    
    msg.channel.send('Hackbanned | Banned them from this server and blacklisted them from my features.')
    
    msg.guild.ban(id)
    db.set(`blid_${id}`, id)
    db.set(`hbreason_${id}`, reason)
    
    
    
    
    
    
    
  }





}