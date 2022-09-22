const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "members",
    type: "CHAT_INPUT",
    description: "see The server membercount!",
    UserPerms: ['SEND_MESSAGES'],
    BotPerms: ["SEND_MESSAGES"],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction) => {

        const embed2 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTitle(`${interaction.guild.name}'s Members`)
        .setDescription(`**Member Count: ${interaction.guild.memberCount}**`)
        .setColor(client.config.embeds.Color)
        .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTimestamp()

    interaction.reply({ embeds: [embed2] });

    }
}