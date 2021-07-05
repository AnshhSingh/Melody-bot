module.exports = (client, message, queue, track) => {
    
message.channel.send({embed: {color: '0000ff', description : `${track.title} **has been added to queue**`}});



};