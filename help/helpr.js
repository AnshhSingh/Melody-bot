const Discord = require('discord.js');
module.exports = {
    cooldown: 5,
    name: "help",
    async run(client,message){
        const help = new Discord.MessageEmbed()
        .setColor('#00faf0')
        .setTitle('Help')
        //.setDescription('[Our support server](https://discord.com/invite/RKTh6fC)• | •[Invite this bot](https://discord.com/oauth2/authorize?client_id=636932023717593088&scope=bot%20applications.commands&permissions=1312685425)•')
        .addFields(
            { name: ';musichelp', value: 'for all music commands', inline: true },
            { name: ';funhelp', value: 'fun and interesting commands such as kiss,hug,poll and some image related command', inline: true },
            { name: ';imghelp', value: 'all image related commands', inline: true },
            { name: ';nsfwhelp', value: 'all nice nsfw commands XD', inline: true },
            { name: ';mchelp', value: 'minecraft related commands', inline: true },
            { name: ';utihelp', value: 'utility search and server related commands', inline: true },
        )
        .setFooter(``)
        message.channel.send(help);
    }
}