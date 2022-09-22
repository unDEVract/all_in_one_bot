const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "announce",
    type: "CHAT_INPUT",
    description: "announce something",
    UserPerms: ['BAN_MEMBERS'],
    BotPerms: ["AMINISTRATOR"],
    options: [{
        name: "channel",
        type: "CHANNEL",
        required: true,
        description: "The channel where the announcement will be send"
    },
    {
        name: "announcement",
        type: "STRING",
        required: true,
        description: "The announcement"
    },],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction) => {

        try {

        // Get the options
        const string = interaction.options.getString("announcement")
        const channel = interaction.options.getChannel("channel")

        // poll embed
        const announcementss = new MessageEmbed()
        .setTitle("📣・announcement")
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setDescription(`${string}`)
        .setColor(client.config.embeds.Color)
        .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTimestamp();

        // Send the review
        await channel.send({ embeds: [announcementss] })

    } catch (error) {
        client.error({ error: "An error has occurred!" }, interaction)
    }
}
}