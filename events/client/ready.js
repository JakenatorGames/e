
module.exports = async bot => {

    bot.user.setStatus("online");

    console.log(`[Madness] Logged in as ${bot.user.tag}!`);

    console.log('[Madness] By : Death#2184 & Jakenator Games#9677');

    console.log(`[Madness] Logged in as * [ " ${bot.user.username} " ] servers! [ " ${bot.guilds.size} " ]`);

    console.log(`[Madness] Logged in as * [ " ${bot.user.username} " ] Users! [ " ${bot.users.size} " ]`);

    console.log(`[Madness] Logged in as * [ " ${bot.user.username} " ] channels! [ " ${bot.channels.size} " ]`);

    console.log("[Madness] Ticket System is now Online");

    console.log("[Madness] Developer System is now Online");

    console.log("[Madness] Command System is now Online");

    setInterval(function() {

        bot.user.setActivity(`${bot.users.size} Users! | *help | ${bot.guilds.size} Servers!`, {type: "WATCHING"})

        

    }, 10000)

}