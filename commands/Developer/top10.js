const db = require('quick.db')
module.exports = {
  config: {
    
    name: "top10",
    aliases: ["t10", "Top10"]
    
  
},
  run: async(client, message) => {
    
    let fb = await db.fetch(`dev_${message.author.id}`)
if (message.author.id !== fb) return;
  if (client.guilds.size < 10) return message.reply("Top 10 Servers!")

  

const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()

message.channel.send(`1. **${top[0].name}**: ${top[0].memberCount}\n2. **${top[1].name}**: ${top[1].memberCount}\n3. **${top[2].name}**: ${top[2].memberCount}\n4. **${top[3].name}**: ${top[3].memberCount}\n5. **${top[4].name}**: ${top[4].memberCount}\n6. **${top[5].name}**: ${top[5].memberCount}\n7. **${top[6].name}**: ${top[6].memberCount}\n8. **${top[7].name}**: ${top[7].memberCount}\n9. **${top[8].name}**: ${top[8].memberCount}\n10. **${top[9].name}**: ${top[9].memberCount}`)

}}