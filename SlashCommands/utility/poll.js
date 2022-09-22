const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "poll",
    type: "CHAT_INPUT",
    description: "Make a poll",
    UserPerms: ['SEND_MESSAGES'],
    BotPerms: ["SEND_MESSAGES"],
    options: [{
        name: "channel",
        type: "CHANNEL",
        required: true,
        description: "The poll channel"
    },
    {
        name: "option-1",
        type: "STRING",
        required: true,
        description: "option 1"
    },
    {
        name: "option-2",
        type: "STRING",
        required: true,
        description: "Option 2"
    },],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction) => {

        // Get the options
        const option = interaction.options.getString("option-1")
        const option2 = interaction.options.getString("option-2")
        const channel = interaction.options.getChannel("channel")

        // poll embed
        const pollembed = new MessageEmbed()
        .setTitle("🗳️・Poll")
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setDescription(`A new poll has arrived!\n\n🔼・${option}\n🔽・${option2}`)
        .setColor(client.config.embeds.Color)
        .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTimestamp();

        // Send the poll
        const message = await channel.send({ embeds: [pollembed] })

        // Send the poll Succes message
        client.succes({ succes: "poll succesfully send!", }, interaction)

        // React with a star
        message.react("🔼")
        message.react("🔽")
    }
}