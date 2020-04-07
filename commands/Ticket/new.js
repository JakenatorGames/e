const { RichEmbed } = require('discord.js')
const db = require('discord.js')
module.exports = {

    config: {

        name: "New",

        description: "Make a ticket.",

        usage: "*new This is an example",

        accessableby: "everyone",

        aliases: ["nw"]

    },
  run: async(client, message, args) => {
    
 let bl = await db.fetch(`ticketbl_${message.guild.id}_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
     let reason = "No reason Provided";

        let text = args.join(' ').replace('$userid', message.author.id).replace('server-name', message.guild.name)

        let role2 = message.guild.roles.find("name", "Support Team");

        let role1 = message.guild.roles.find("name", "@everyone");

        if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`** :x: You already have a ticket open.**`);

        let ticketsStation = message.guild.cjannel.find("name", "TICKETS");

        if (!role1) {

            return message.channel.send('**Please make sure that `Support Team` role and `TICKETS` category exists and it\'s not duplicated.**');

        };

        if (!ticketsStation) {

            message.guild.createChannel("TICKETS", "category");

        };

        message.guild.createChannel(`ticket-${message.author.id}`, "text").then(ticket => {

            message.delete()

            message.channel.send(`**:white_check_mark: Your ticket has been created.➡️ [ ${ticket} ]**`);

            ticket.setParent(ticketsStation);

           

            ticket.overwritePermissions(role2, {

                SEND_MESSAGES: true,

                READ_MESSAGES: true

            });

            ticket.overwritePermissions(role1, {

                SEND_MESSAGES: false,

                READ_MESSAGES: false

                

            });

            ticket.overwritePermissions(message.author.id, {

                SEND_MESSAGES: true,

                READ_MESSAGES: true

            });

            let embed = new RichEmbed()

                .setTitle(`Dear @${message.author.username} \`(${message.author.id})\` `, message.author.avatarURL)

                .setDescription(`**Thank you for reaching out to our Support Team! We will get back to you as soon as possible, if you would like to exlain your problem so we have an easier time understanding, please feel free to do so.**`)

                .setColor("#ff0000")

                .setThumbnail(`${message.author.avatarURL}`)

                .addField('**Subject**', text || reason)

                .setFooter('Snoop`s Ticket System')

                .setTimestamp();



            ticket.send(embed);

        })

    }
    
    
  };