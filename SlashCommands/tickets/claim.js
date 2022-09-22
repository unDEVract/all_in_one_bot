const Discord = require("discord.js")

module.exports = {
    name: 'claim',
    description: 'claim a ticket',
    type: 'CHAT_INPUT',
    UserPerms: ['MANAGE_MESSAGES'],
    BotPerms: ["SEND_MESSAGES"],
    ticket: true,
    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async (client, interaction, args) => {

        
         // require the logs
         const logChannel = interaction.guild.channels.cache.get(client.config.tickets.logs)

        // make the embed
        const embed_claim = new Discord.MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTitle('✋・Claimed')
        .setDescription(`You are now assisted by: ${interaction.user}`)
        .setColor(client.config.embeds.Color)
        .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTimestamp();

        //send the embed
        interaction.reply({ embeds: [embed_claim] })

                // send the logs
                const logEmbed = new Discord.MessageEmbed()
                .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                .setTitle("✋・Claimed")
                .setDescription("A ticket has claimed!")
                .addFields(
                    {
                        name: `📃・Claimed by:`,
                        value: `<@${interaction.user.id}>`
                    },
                    {
                        name: "❓・Channel",
                        value: `${interaction.channel.name}`
                    })
                    .setColor(client.config.embeds.Color)
                    .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                    .setTimestamp();
    
                logChannel.send({ embeds: [logEmbed] })

   }
}
