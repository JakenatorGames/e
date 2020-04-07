const { RichEmbed } = require('discord.js')

module.exports = {
  config: {
    
    
    name: "bldeny",
    
    
  
},
  run: async(bot, message, args) => {
    
    if (message.guild.id !== '653041028432920576') return message.channel.send(`:x: This command can be only executed in our support server by people with the role 'Blacklist Perms'`)
    if (!message.member.roles.has('657084870446809098')) return;
    let user = message.mentions.members.first();
    let m = args.join(" ").slice(22);

    user.send(`:x: Hello, we regret to inform you your blacklist appeal has been denied for ${m}, hopefully this does not discourage you.`)
  }}