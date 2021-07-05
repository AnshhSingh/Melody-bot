const Discord = require('discord.js');
module.exports = {
    name: "nsfwhelp",
    async run(client,message){
        const help = new Discord.MessageEmbed()
        .setColor('#00faf0')
        .setTitle('NSFW Help')
        //.setDescription('[Our support server](https://discord.com/invite/RKTh6fC)• | •[Invite this bot](https://discord.com/oauth2/authorize?client_id=636932023717593088&scope=bot%20applications.commands&permissions=1312685425)•')
        .addFields(
            { name: 'Real Life GIF', value: '`;asian`  `;closeup`  `;sexstanding`  `;sexcar`  `;sexmilf`  `;squirt`  `;doggie`  `;doublepen`  `;creampie`  `;analcum`  `;deepthroat`  `;masturbate`  `;cumshot`  `;erotic`  `;caress`  `;skinny`  `;bdsm`  `;homemade`', inline: true},
            { name: 'Hentai/animation', value: '`;blowjob`  `;animate`  `;hentai`  `;cumhentai`  `;solohentai`  `;lewdneko`', inline: true },
            { name: 'Image Commands', value: '`;boobs`  `;butts`', inline: true },
        )
            .setFooter(``)
        message.channel.send(help);
    }
}