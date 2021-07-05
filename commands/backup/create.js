const backup = require('discord-backup');
module.exports = {
    name: "create",
async run (client, message, args){
    

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(':x: You need to have the manage messages permissions to create a backup in this server.');
    }

    backup.create(message.guild,{
        jsonBeautify: true,
        maxMessagesPerChannel: 200,
        saveImages: "base64"
    }).then((backupData) => {

        return message.channel.send('Backup created! Here is your ID: `'+backupData.id+'`! Use `;load-backup '+backupData.id+'` to load the backup on another server!');

    }).catch(() => {

        return message.channel.send(':x: An error occurred, please check if the bot is administrator!');

});

}};