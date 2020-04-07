module.exports = {

    config: {

        name: "purge",

        description: "purge a number of messages",

        usage: "*purge",

        accessableby: "Administrators",

        aliases: ["clear", "cchat", "prune"]

    },

    run: async(bot, message, args) => {
    const db = require('quick.db')
   let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
       let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
    
        let textxt = args.slice(0).join("");

        if (message.member.hasPermission("MANAGE_MESSAGES")) {

            if (textxt == "") {

                message.delete().then

                message.channel.send("***```Set the number of messages you want to delete```***").then(m => m.delete(3000));

            } else {

                message.delete().then

                message.delete().then

                message.channel.bulkDelete(textxt);

                message.channel.send("```php\n The number of messages that have been cleared: " + textxt + "\n```").then(m => m.delete(3000));

            }

        }

    }

}