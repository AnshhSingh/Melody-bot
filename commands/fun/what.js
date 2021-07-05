
const Discord = require('discord.js');
module.exports = {
    name: 'what',

    async run (client, message, args) {

if (!args[0]) return message.channel.send('please give the text');
else
var res = args.toString().replace(" ", "l");
const im = new Discord.MessageEmbed()
.setColor('#00faf0')
.setTitle(`hmmm`)
.setImage(`https://ndinoryt.sirv.com/images%20(13).jpeg?profile=queremos&text.0.text=WHAT%20DO%20WE%20WANT%3F%3F%3F&text.0.position=northwest&text.0.size=45&text.0.color=000000&text.0.font.weight=800&text.1.text=${res}&text.1.position=east&text.1.size=45&text.1.color=000000&text.1.font.weight=800
`)
.setFooter(``)
message.channel.send(im);

    }}