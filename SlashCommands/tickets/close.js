const Discord = require("discord.js")
const { createTranscript } = require('discord-html-transcripts')

module.exports = {
    name: 'close',
    description: 'close a ticket',
    type: 'CHAT_INPUT',
    UserPerms: ['SEND_MESSAGES'],
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
        
            // make the transcript
            const transcriptFile = await createTranscript(interaction.channel, {
                limit: -1,
                fileName: `${interaction.channel.name}.html`,
                returnBuffer: false
            });

            // send a succes message
            client.succes({ succes: `Ticket is closed by <@${interaction.user.id}> and wil be closed in 5 seconds!`}, interaction)


            // send the logs
            const logEmbed = new Discord.MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setTitle("🗑・closed")
            .setDescription("A ticket has closed!")
            .addFields(
                {
                    name: `📃・Closed by:`,
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
            logChannel.send({ files: [transcriptFile] })

            setTimeout(function () {
                interaction.channel.delete()
            }, 5000);
        }
    }