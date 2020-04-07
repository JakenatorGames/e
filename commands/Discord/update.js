const { RichEmbed } = require('discord.js')
module.exports = {

    config: {

        name: "update",

        description: "*update <your update> OWNERS ONLY",


    },
run: async(client, msg, args) => {
        const db = require('quick.db')
   let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
    let n = await db.fetch(`gban_${msg.guild.id}`)
    if (msg.guild.id === n) return msg.channel.send("Error, your server id is blacklisted.")
    
    
  if (!msg.member.hasPermission("BAN_MEMBERS"))return msg.channel.send(mm);
  
  let mm = new RichEmbed()
  .setTitle("Error")
  .setDescription(":no_entry: You require the `MANAGE_SERVER` permission to use this.")
  .setColor('BLACK')
  
  let reason = args.join(" ");

      
  
  let m = new RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setTitle("Snoop Update")
  .addField("Server", `${msg.guild.name}`)
  .addField("Created By:", `${msg.author.tag}`)
  .addField("Created At", `${msg.createdAt}`)
  .addField("Update", `${reason}`)
  
  .setColor('BLACK')
  
  msg.delete()
  
  client.channels.get('653416694772924437').send(m)


}};