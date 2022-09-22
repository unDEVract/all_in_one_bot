const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "ban",
    type: "CHAT_INPUT",
    description: "ban a user",
    UserPerms: ['BAN_MEMBERS'],
    BotPerms: ["BAN_MEMBERS"],
    options: [{
        name: "user",
        type: "USER",
        required: true,
        description: "The user you want to ban"
    },
    {
        name: "reason",
        type: "STRING",
        required: true,
        description: "The reason of the ban"
    },],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction) => {

        // get the options
        const user = interaction.options.getMember('user')
        const reason = interaction.options.getString('reason') || "No Reason Provided"

        // check  if the user have higher roles
        if(user.roles.highest.position >= interaction.member.roles.highest.position) return client.error({ error: "You can't ban a user with a higher role" }, interaction)

        // check if the user have higher roles than the bot
        if (user.roles.highest.position >= interaction.guild.me.roles.highest.position) return client.error({ error: "I cannot ban a user with a higher role than me" }, interaction)

        // check if the sender is the user
        if (user.user.id == interaction.user.id) return client.error({ error: "You cannot ban yourself!" }, interaction)

        // ban the user
        user.ban({reason})

        // a embed that the user get sended
        const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTitle("🔨・Banned")
        .setDescription("You are banned of a server!")
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
            client.succes({ succes: `succesfully banned ${user} and he get a notification`}, interaction)

    }
}