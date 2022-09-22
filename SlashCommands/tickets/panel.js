const Discord = require("discord.js")

module.exports = {
    name: 'panel',
    description: 'send the ticket panel',
    type: 'CHAT_INPUT',
    UserPerms: ['ADMINISTRATOR'],
    BotPerms: ["ADMINISTRATOR"],
    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async (client, interaction, args) => {

            const embed = new Discord.MessageEmbed()
                .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                .setTitle('🎫・Tickets')
                .setDescription('Do you have questions, you want to apply or want to be a partner? Create then a ticket!\n\n**:question:・How can i make a ticket?\n**Click on the drop-down menu and choose for what you want to make a ticket. When you click on the option, he immediately creates a ticket!\n\n**:exclamation:・Attention**\nDon\'t make unnecessary tickets or multiple tickets!')
                .setColor(client.config.embeds.Color)
                .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                .setTimestamp();

            const row = new Discord.MessageActionRow()
                .addComponents(
                    new Discord.MessageSelectMenu()
                        .setCustomId('ticket_menu')
                        .setPlaceholder('❌・Nothing Selected')
                        .addOptions([
                            {
                                label: 'Support',
                                description: 'Speak Support',
                                value: 'support_option',
                                emoji: '❓'
                            },
                            {
                                label: 'Apply',
                                description: 'Apply for staff',
                                value: 'apply_option',
                                emoji: '👮‍♂️'
                            },
                            {
                                label: 'Report',
                                description: 'Report a user/bug!',
                                value: 'report_option',
                                emoji: '🆘'
                            },
                        ]),
                );

            interaction.reply({ embeds: [embed], components: [row] })

    }
}