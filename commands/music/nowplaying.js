module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    async run (client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);


        
        const yh = client.player.createProgressBar(message, { timecodes: true });
        
        const song = client.player.nowPlaying(message);
        const filters = [];
        
        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;
        
        message.channel.send({embed: {color: '123413', description: `${client.emotes.music} | Now Playing:\n${song.title}\n requested by \`${song.requestedBy.username}\`\n\`${yh}\` `}})

}
        
    
};
