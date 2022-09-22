module.exports = {
    name: "lock",
    type: "CHAT_INPUT",
    description: "lock a channel",
    UserPerms: ['MANAGE_CHANNELS'],
    BotPerms: ["MANAGE_CHANNELS"],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction) => {

        // Get the options
        const everyrole = interaction.guild.roles.cache.find(x => x.name === "@everyone").id;

        // lock the channel
        interaction.channel.permissionOverwrites.edit(everyrole, {
            SEND_MESSAGES: false
        })

        client.succes({ succes: "Succesfully locked This channel"}, interaction)

    }
}