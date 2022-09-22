module.exports = {
    name: "remove",
    type: "CHAT_INPUT",
    description: "remove a user from a ticket",
    UserPerms: ['MANAGE_MESSAGES'],
    BotPerms: ["SEND_MESSAGES"],
    options: [{
        name: "user",
        type: "USER",
        required: true,
        description: "The user you want to remove"
    },],
    ticket: true,
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction) => {

        // Get the options
        const UserRemove = interaction.options.getMember("user")

        // check if the author is the user
        if (UserRemove.user.id == interaction.user.id) return client.error({ error: "You cannot remove yourself!" }, interaction)
        
        // add the user
        interaction.channel.permissionOverwrites.edit(UserRemove, {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false,
        });

        client.succes({ succes: `Succesfully removed ${UserRemove} of the ticket`}, interaction)



    }
}