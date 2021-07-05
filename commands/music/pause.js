module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    async run (client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send({embed:{color:'f20100',description:`${client.emotes.error} - No music currently playing !`}});

        if (client.player.getQueue(message).paused) return message.channel.send({embed:{colour:'ff0000',description:`${client.emotes.error} - The music is already paused !`}});

        client.player.pause(message);

        message.channel.send({embed:{color:'0000ff',description:`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} paused !`}});
    },
};