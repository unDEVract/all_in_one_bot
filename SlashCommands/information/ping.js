const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "ping",
    type: "CHAT_INPUT",
    description: "see the bot ping",
    UserPerms: ['SEND_MESSAGES'],
    BotPerms: ["SEND_MESSAGES"],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction) => {

        // the ping embed
        const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTitle(`🏓・Pong!`)
        .addFields(
            {
                name: "💬・Message Latency",
                value: `\`${Date.now() - interaction.createdTimestamp}ms\``,
            },
            {
                name: "💻・API Latency",
                value: `\`${Math.round(client.ws.ping)}ms\``,
            })
        .setColor(client.config.embeds.Color)
        .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTimestamp();

        // send the embed
        interaction.reply({ embeds: [embed] })

    }
}
    