
module.exports = async (client) => {
    console.log(`Ready on ${client.guilds.cache.size} servers`);
    
    client.user.setStatus
    ("online");
}
