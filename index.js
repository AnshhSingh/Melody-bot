const fs = require('fs');
const discord = require('discord.js');
const db = require('quick.db');
const client = new discord.Client({ shards: 'auto' } , { disableMentions: 'everyone'});
const { Player } = require ('discord-player');
const { dprefix } = require('./commands/settings/prefix.json');

client.player = new Player(client, {leaveOnEmptyCooldown: 600000 , leaveOnEmpty: true , enableLive: true , ytdlDownloadOptions: {filter: "audio"}});
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    }
});
require('events').EventEmitter.prototype._maxListeners = 100;
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));
for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
}

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
}
client.aliases = new discord.Collection();


    var lastReply = 0;
    client.on("message", async message => {

        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
        let prefix = await db.get(`prefix_${message.guild.id}`)
        if(prefix === null) prefix = dprefix;
        
    
        
        if(message.content.startsWith(prefix)) {
            if(Date.now() - lastReply < 3100) {
            message.channel.send('You need to wait 3.1 seconds before using other command');return;
            }
            lastReply = Date.now();
            const args = message.content.slice(prefix.length).trim().split(/ +/);
    
            const command = args.shift().toLowerCase();
    
            if(!client.commands.has(command)) return;
    
    
            try {
                client.commands.get(command).run(client, message, args);
    
            } catch (error){
                console.error(error);
            }
        }
    })
    
client.login('');
