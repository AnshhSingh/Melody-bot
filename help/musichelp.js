const Discord = require('discord.js');
module.exports = {
    cooldown: 5,
    name: "musichelp",
   
    async run(client,message){
        
        const mhelp = new Discord.MessageEmbed()
        .setColor('#00faf0')
        .setTitle('Music help')
     
        .addFields(
            { name: ';play <song name/url/id>', value: 'for all music commands', inline: true },
            { name: ';queue', value: 'lists the songs which are added to the bot queue', inline: true },
            { name: ';clearqueue', value: 'clears all the songs in queue', inline: true },
            { name: ';nowplaying', value: 'The name and the progress of song being played right now', inline: true },
            { name: ';skip', value: 'skips the currently playing song and starts next song from the queue', inline: true },
            { name: ';back', value: 'starts playing the song which was played just before current song', inline: true },
            { name: ';pause/resume', value: 'pause the song /resume the songs', inline: true },
            { name: ';loop', value: 'plays the song in loop', inline: true },
            { name: ';shuffle', value: 'shuffle the song queuep', inline: true },
            { name: ';filter', value: 'add effects to the song use filter from filter list', inline: true },
            { name: ';listfilter', value: 'list the filters available to apply on music', inline: true },
            { name: ';stop', value: 'delete the queue and leave voice channel', inline: true },
        )
        .setFooter(`songs/playlist supported from youtube you can add songs from spotify and SoundCloud too`)
        message.channel.send(mhelp);
    }
}