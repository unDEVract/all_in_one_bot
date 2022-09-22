const client = require("../../index");
const logs = require('discord-logs');

logs(client);
client.on("guildMemberUpdate", async (member) => {
    client.channels.cache.get(client.config.serverStats.boosts).setName(`🏆・Boosts: ${member.guild.premiumSubscriptionCount || '0'}`)
    client.channels.cache.get(client.config.serverStats.boostschannel).send(`New boost! ${member.user.username}`)
})

client.on("guildMemberUnboost", async (member) => {
    client.channels.cache.get(client.config.serverStats.boosts).setName(`🏆・Boosts: ${member.guild.premiumSubscriptionCount || '0'}`)
    client.channels.cache.get(client.config.serverStats.boostschannel).send(`New unboost! ${member.user.username}`)
})