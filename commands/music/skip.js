module.exports = {
    name: 'skip',
    aliases: ['s'],
    category: 'Music',
    utilisation: '{prefix}skip',

    async run (client, message) {
        if (!message.member.voice.channel) return message.channel.send({embed:{color:'ff0000',description:`${client.emotes.error} - You're not in a voice channel !`}});

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        client.player.skip(message);

        message.channel.send({embed: {color: '0000ff',description:`${client.emotes.success} - The current music has just been **skipped** !`}}); 
    },
};
