module.exports = {
  config: {
    
    name: "stop"
  
},
run: async (bot, message, args, ops) => {

    if (!message.member.voiceChnannel) return message.channel.send(':x: Error | Please connect to a voice channel');

    if (!message.guild.voiceChnannel) return message.channel.send(':x: Error | Sorry, the bot isn\'t connect to the guild');

    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('"x: Error | Sorry, you aren\'t connected to the same channel');


 //Oof your grammar sory to sorry
    message.guild.me.voiceChannel.leave();


//Grim what should we do
    message.channel.send(':white_check_mark: Success | Leaving Channel...');

}}

