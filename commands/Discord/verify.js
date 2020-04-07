const discord = require('discord.js')
module.exports = {

    config: {

        name: "verify",

        description: "Admin Command List",

        usage: "*Help admin",

        accessableby: "everyone",

        aliases: ["v", "vrf", "vf"]

    },
  
   run: async(client, message, args) => {
          const db = require('quick.db')
   let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
        let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
     var gid = message.guild.id

	if (message.member.roles.find('name', 'Verified')){

		let e2m = new discord.RichEmbed()

		.setTitle(`${message.author.username}#${message.author.discriminator}`)

		.setDescription("Couldn't be verified!")

		.addField("Reason:", "The user is already verified!")

		.setThumbnail(message.author.displayAvatarURL)

		.setColor(`#FF0000`)

		.setTimestamp()

	
		.setFooter('Already Verified!');

		

		message.channel.send({embed: e2m});

	

	

	if (!message.guild.me.hasPermission("MANAGE_ROLES")) {message.channel.send('Unable to create role due to "No Permission" needs MANAGE_ROLES!'); }

	if (!message.guild.roles.find('name', "Verified")){

		

		message.guild.createRole({

			name: 'Verified',

			color: 'GREEN',

			position: 0

		}, "I didn't find this role so I made it!")

		.then (role => {

		if (message.guild.roles.find('name', 'Verified').comparePositionTo(message.guild.me.highestRole) > 0) {

			let em = new discord.RichEmbed()

			.setTitle(`${message.author.username}#${message.author.discriminator}`)

			.setDescription("Couldn't be verified.")

			.addField("Reason:", "The 'Verified' role is higher than my role!")

			.setThumbnail(message.author.displayAvatarURL)

			.setColor(`#FF0000`)

			.setTimestamp()

			.setURL("")

			.setFooter('ERROR');



			message.channel.send({embed: em});

			return;

			};

		message.member.addRole(message.guild.roles.find('name', 'Verified'), "User has been authorized with AuthBot!")

		let em = new discord.RichEmbed()

			.setTitle(`${message.author.username}#${message.author.discriminator}`)

			.setDescription("You are now verified.")

			.setThumbnail(message.author.displayAvatarURL)

			.setColor(`#00FF00`)

			.setFooter(`Now authorized on ${message.guild.name}`)

			.setURL("")

			.setTimestamp();

	

			message.channel.send({embed: em});

			return;

		});

	}

	if (!message.guild.roles.find('name', "Verified")){

		console.log("Unable to create role!")

	

	};

	if (message.guild.roles.find('name', 'Verified').comparePositionTo(message.guild.me.highestRole) > 0) {

		let em = new discord.RichEmbed()

		.setTitle(`${message.author.username}#${message.author.discriminator}`)

		.setDescription("Couldn't be Verified")

		.addField("Reason:", "The 'Verified' role is higher than my role!")

		.setThumbnail(message.author.displayAvatarURL)

		.setColor(`#FF0000`)

		.setTimestamp()

		.setURL("")

		.setFooter('ERROR');

		

		message.channel.send({embed: em});

  }

		}

	message.member.addRole(message.guild.roles.find('name', 'Verified'), "User has been authorized with Snoop!")

	let em = new discord.RichEmbed()

		.setTitle(`${message.author.username}#${message.author.discriminator}`)

   	 	.setDescription("You are now Authorized")

		.setThumbnail(message.author.displayAvatarURL)

    		.setColor(`#00FF00`)

		.setFooter(`Now authorized on ${message.guild.name}`)

		.setURL("")

		.setTimestamp();

	

	message.channel.send({embed: em});
message.delete()
  }};



