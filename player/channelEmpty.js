module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Music stopped after playing 10 minutes without any member joining the voice channel`);
};
