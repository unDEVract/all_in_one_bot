
module.exports = {
    name: "say",
    type: "CHAT_INPUT",
    description: "say something",
    UserPerms: ['SEND_MESSAGES'],
    BotPerms: ["SEND_MESSAGES"],
    options: [{
        name: "text",
        type: "STRING",
        required: true,
        description: "The text you want to say"
    },],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction) => {

        // Get the options
        const string = interaction.options.getString("text")

        client.simpleEmbed({ text: `${string}` }, interaction)

    }
}