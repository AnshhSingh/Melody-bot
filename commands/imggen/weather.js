
const Discord = require('discord.js');
module.exports = {
    name: 'weather',

    async run (client, message, args) {

if (!args[0]) return message.channel.send('please give country/city name!');
else 

var res = args.toString().replace(" ","%20");
const qr = new Discord.MessageEmbed()
.setColor('#00faf0')
.setTitle(`${args}`)
.setImage(`https://wttr.in/`+res+'.png?m')
.setFooter(``)
message.channel.send(qr);

    }}