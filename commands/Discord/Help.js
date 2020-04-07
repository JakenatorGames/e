const Discord = require('discord.js')

module.exports = {

    config: {

        name: "Help",

        description: "Command List",

        usage: "*Help",

        accessableby: "everyone",

        aliases: ["cmds", "help"]

    },
  run: async(client, message, args) => {
    
    let h11 = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setTitle("Command Modules")
    .addField("Version", '2.9.0')
    .addField('Categories', `

1. Admin
2. Fun 
3. Roblox
4. Ticket
5. Basic
6. NSFW
7. Economy
8. Profile
9. Reputation


`)
    .addField("Examples", `
- *help-1
- *help-2
- *help-3
- *help-4
- *help-5 
- *help-6
- *help-7
- *help-8
- *help-9

`)
    
    .addField("Blacklist Appeal", 'If you get blacklisted, only commands you will be allowed to use is *sinv aand *blappeal, you must be in support server to be unblacklisted. Go to management for questions.')
    
    
    .addField("Developers", '<@343586271257427968> | <@478428561800429591>')
    
    .addField("Log setup", 'Want to set up logs for your server? Easy! For chatlogs make a channel called: chatlogs | For logs make a channel called: logs, and for Welcome make a channel called: welcome')
    .addField("Updates", 'V3 in progress! Let us know if any bugs occur.') 
    .addField("Links", ' <:icon2:659457607047708696> **[Discord](https://discord.gg/QKxRgu5)** - <:twitter:659537294767685642>**[Twitter](https://twitter.com/DiscordSnoop) - **:record_button:**[Website](https://jakenatorgames.com/) ** - :radio_button: **[Donate](https://jakenatorgames.com/donate/)**')
    .setDescription("Thank you for using Snoop, we highly appreciate you using our bot and if you have any questions, problems or concerns please consider joining our support server or using *support.")
    message.author.send(h11)
    
    let dm = new Discord.RichEmbed()
    .setTitle("DM")
    .setDescription(":mailbox: I have sent you a list of commands in dm's.")
    .setColor('RANDOM')
    message.channel.send(dm)
  }};
