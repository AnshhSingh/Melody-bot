module.exports = (client, message, track) => {
message.channel.send({embed: {color: '119944', description: `  <a:emoji_1:842615750560317470>   |  Now Playing:\n${track.title} ` }});
};
