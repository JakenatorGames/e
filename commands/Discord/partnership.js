const { RichEmbed } = require('discord.js')
module.exports = {

    config: {

        name: "spartnership",

        description: "Partner request",

        usage: "*partership brief statement",

        accessableby: "everyone",

        aliases: ["Partnership", "partnership", "pns"]

    },
run: async(client, msg, args) => {
     const db = require('quick.db')
   let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
    let n = await db.fetch(`gban_${msg.guild.id}`)
    if (msg.guild.id === n) return msg.channel.send("Error, your guild is blacklisted.")
    
  if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(mm);
  
  let mm = new RichEmbed()
  .setTitle("Error")
  .setDescription(":no_entry: You require the `ADMIN` permission to use this.")
  .setColor('BLACK')
  
  let reason = args.join(' ');

      
  
  let m = new RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setTitle("Partner Request")
  .addField("Server", `${msg.guild.name}`)
  .addField("Server ID", `${msg.guild.id}`)
  .addField("Requested by:", `${msg.author.tag}`)
  .addField("User ID:", `${msg.author.id}`)
  .addField("Requested at:", `${msg.createdAt}`)
  .addField("Reason", `${reason}`)
  
  .setDescription("Note: Abuse of this feature will result in a server blacklist.")
  .setColor('RED')
  
  msg.delete()
  
  client.channels.get('655099348417511424').send(m)


     msg.channel.createInvite().then(inv => 
                                    client.channels.get('655099348417511424').send(`[Link](https://discord.gg/${inv.code})`))
}};