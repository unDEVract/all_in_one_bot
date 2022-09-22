
module.exports = {
    name: "suggest",
    type: "CHAT_INPUT",
    description: "Leave a suggestion",
    UserPerms: ['SEND_MESSAGES'],
    BotPerms: ["SEND_MESSAGES"],
    options: [{
        name: "suggestion",
        type: "STRING",
        required: true,
        description: "The Suggestion"
    },],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction) => {

        // Get the channel
        const channel = client.channels.cache.get(client.config.channels.suggestion)
        if (!channel) return;

        // Get the options
        const string = interaction.options.getString("suggestion")

        // Send the review
        const message = await client.suggestion({ message: `${string}`, user: `${interaction.user.username}` }, channel)

        // Send the review Succes message
        client.succes({ succes: "suggestion succesfully send!", }, interaction)

        // React with a star
        message.react("✅")
        message.react("❌")
    }
}