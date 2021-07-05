module.exports = {
    name: ',dbg',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',

    async run (client, message) {
        message.channel.send(`${client.emotes.success} - ${client.user.username} connected in **${client.voice.connections.size}** channels !`);
    },
};
