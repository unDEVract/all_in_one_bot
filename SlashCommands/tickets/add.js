module.exports = {
    name: "add",
    type: "CHAT_INPUT",
    description: "add a user to the ticket",
    UserPerms: ['MANAGE_MESSAGES'],
    BotPerms: ["SEND_MESSAGES"],
    options: [{
        name: "user",
        type: "USER",
        required: true,
        description: "The user"
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
        const UserAdd = interaction.options.getMember("user")

        // check if the author is the user
        if (UserAdd.user.id == interaction.user.id) return client.error({ error: "You cannot add yourself!" }, interaction)
        
        // add the user
        interaction.channel.permissionOverwrites.edit(UserAdd, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
        });

        client.succes({ succes: `Succesfully added ${UserAdd} to the ticket`}, interaction)



    }
}