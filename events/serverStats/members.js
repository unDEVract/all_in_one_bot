const client = require("../../index");

client.on("guildMemberAdd", async (member) => {
    client.channels.cache.get(client.config.serverStats.members).setName(`👤・Members: ${member.guild.memberCount}`)

})

client.on("guildMemberRemove", async (member) => {
    client.channels.cache.get(client.config.serverStats.members).setName(`👤・Members: ${member.guild.memberCount}`)

})