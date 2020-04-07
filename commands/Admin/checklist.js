const { RichEmbed } = require('discord.js')
module.exports = {

    config: {

        name: "checklist",

        description: "*checklist <your checklist whatever>",


    },
run: async(client, msg, args) => {
        const db = require('quick.db')
   let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
    let n = await db.fetch(`gban_${msg.guild.id}`)
    if (msg.guild.id === n) return msg.channel.send("Error, your server id is blacklisted.")
    
      let mm = new RichEmbed()


    .setTitle("Error")
  .setDescription(":no_entry: You require the `MANAGE_SERVER` permission to use this.")
  .setColor('BLACK')
    if (!msg.member.hasPermission("BAN_MEMBERS"))return msg.channel.send(mm);
  
       var gid = msg.guild.id

      let reason = args.join(" ");

      
  
  let m = new RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setTitle("Snoop Checklist")
  .addField("Server", `${msg.guild.name}`)
  .addField("Checklist Created By", `${msg.author.tag}`)
  .addField("Checklist Created At", `${msg.createdAt}`)
  .addField("Checklisted", `${reason}`)
  
  .setColor('BLACK')
  
  msg.delete()
  
  client.channels.get('653385472814481418').send(m)



}}