module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    async run (client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send({embed:{color:'0f0f00',description:`${client.emotes.error} - No music currently playing !`}});

        if (!client.player.getQueue(message).paused) return message.channel.send({embed:{color:'00ff00', description:`${client.emotes.error} - The music is already playing !`}});

        client.player.resume(message);

        message.channel.send({embed:{color:'002241', description:`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} resumed !`}});
    },
};