const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    
    
    name: "edits"
    
  },
  run: async(bot, msg) => {
    
  let g = await db.fetch(`dev_${msg.author.id}`)
    if (msg.author.id !== g) return;
    let d = new Discord.RichEmbed()
    .setTitle("Edit Links")
    .addField("Snoop", `[Snoop](https://glitch.com/edit/#!/join/261e99e9-2056-4e07-8d20-a7180273293a)`)
    .addField("Snoop Beta", `[Beta](https://glitch.com/edit/#!/join/a09d6f54-2fec-4e74-b7e9-ce25fadba1a8)`)
    
    msg.author.send(d)
  }
  
}