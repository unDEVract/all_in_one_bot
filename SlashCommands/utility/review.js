
module.exports = {
    name: "review",
    type: "CHAT_INPUT",
    description: "Leave a review",
    UserPerms: ['SEND_MESSAGES'],
    BotPerms: ["SEND_MESSAGES"],
    options: [{
        name: "review",
        type: "STRING",
        required: true,
        description: "The review!"
    },
    {
        name: "stars",
        type: "NUMBER",
        required: true,
        description: "The stars"
    }],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction) => {

        // Get the channel
        const channel = client.channels.cache.get(client.config.channels.review)
        if (!channel) return;

        // Get the options
        const string = interaction.options.getString("review")
        stars = interaction.options.getNumber("stars")

        if(stars < 1 || stars > 5) return client.error({ error: "Please define a stars between 1-5", }, interaction)
        if(stars === 1) stars = "⭐"
        if(stars === 2) stars = "⭐⭐"
        if(stars === 3) stars = "⭐⭐⭐"
        if(stars === 4) stars = "⭐⭐⭐⭐"
        if(stars === 5) stars = "⭐⭐⭐⭐⭐"

        // Send the review
        const message = await client.review({ stars: `${stars}`, message: `${string}`, user: `${interaction.user.username}` }, channel)

        // Send the review Succes message
        client.succes({ succes: "review succesfully send!", }, interaction)

        // React with a star
        message.react("⭐")
    }
}