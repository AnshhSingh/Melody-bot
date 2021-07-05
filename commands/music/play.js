module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    async run (client, message, args) {
        if (!message.member.voice.channel) return message.channel.send({embed: {colour:'ff0000', description:`${client.emotes.error} - You're not in a voice channel !`}});

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!args[0]) return message.channel.send({embed: {colour:'02751f', description:`${client.emotes.error} - Please indicate the title of a song !`}});

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};