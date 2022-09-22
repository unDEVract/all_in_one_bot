const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");
module.exports = {
    name: "rplay",
    description: "send the radio embed",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {

        if(!interaction.member.voice.channel) return client.error({ error: "You must be in a voicechannel!"}, interaction)

            let radioEmbed = new MessageEmbed()
                .setTitle(`📻 • Radio`)
                .setDescription('Select your radio in the dropdown menu!')
                .setColor(client.config.embeds.Color)
                .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                .setTimestamp();

            let row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                        .setCustomId('radio-menu')
                        .setPlaceholder("❌ • Nothing Selected")
                        .setMinValues(1)
                        .setMaxValues(1)
                        .addOptions([
                            {
                                label: `Radio 538 non-stop`,
                                description: `Play non-stop radio 538`,
                                emoji: "🎶",
                                value: "radio538-option"
                            },
                            {
                                label: `Qmusic non-stop`,
                                description: `Play non-stop Qmusic radio`,
                                emoji: "🎶",
                                value: "qmusic-option"
                            },
                            {
                                label: `Slam non-stop`,
                                description: `Play non-stop Slam radio`,
                                emoji: "🎶",
                                value: "slam-option"
                            },
                            {
                                label: `Skyradio`,
                                description: `Play non-stop Skyradio`,
                                emoji: "🎶",
                                value: "skyradio-option"
                            },
                            {
                                label: `Veronica`,
                                description: `Play non-stop radio Veronica`,
                                emoji: "🎶",
                                value: "veronica-option"
                            }
                        ])
                )

            interaction.reply({ embeds: [radioEmbed], components: [row] })
    }
}