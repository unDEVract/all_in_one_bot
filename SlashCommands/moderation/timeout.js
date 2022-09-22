const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "timeout",
    type: "CHAT_INPUT",
    description: "timeout a user",
    UserPerms: ['TIMEOUT_MEMBERS'],
    BotPerms: ["TIMEOUT_MEMBERS"],
    options: [{
        name: "user",
        type: "USER",
        required: true,
        description: "The user you want to timeout"
    },
    {
        name: "time",
        type: "NUMBER",
        required: true,
        description: "The time of the timeout"
    },
    {
        name: "reason",
        type: "STRING",
        required: true,
        description: "The reason of the timeout"
    },],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction) => {

        // get the options
        const user = await interaction.guild.members.fetch(interaction.options.getUser('user').id);
        const reason = interaction.options.getString('reason') || "No reason was specified"
        const time = interaction.options.getNumber('time')

        // check  if the user have higher roles
        if(user.roles.highest.position >= interaction.member.roles.highest.position) return client.error({ error: "You can't timeout a user with a higher role" }, interaction)

        // check if the user have higher roles than the bot
        if (user.roles.highest.position >= interaction.guild.me.roles.highest.position) return client.error({ error: "I cannot timeout a user with a higher role than me" }, interaction)

        // check if the sender is the user
        if (user.user.id == interaction.user.id) return client.error({ error: "You cannot timeout yourself!" }, interaction)

        // timeout the user
        user.timeout(time * 60 * 1000, reason)

        // a embed that the user get sended
        const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTitle("⏰・time-out")
        .setDescription("You are time-outed in a server!")
        .addFields(
            {
                name: "Guild:",
                value: `${interaction.guild.name}`
            },
            {
                name: "Moderator:",
                value: `${interaction.user.username}`
            },
            {
                name: "reason:",
                value: `${reason}`
            })
            .setColor(client.config.embeds.Color)
            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setTimestamp();

            // send the embed
            user.send({ embeds: [embed] })

            // reply with a succes embed
            client.succes({ succes: `succesfully time-out ${user} and he get a notification`}, interaction)

    }
}