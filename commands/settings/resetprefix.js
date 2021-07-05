const db = require('quick.db');

module.exports = {
    name: "resetprefix",
    description: "Set a server's prefix",

    async run (client, message, args) {
        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('You don\'t have permission to use that.');

        db.set(`prefix_${message.guild.id}`,';')

        message.channel.send(`Succesffully set new prefix to **;**`)
    }
}