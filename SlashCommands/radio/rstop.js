const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");
module.exports = {
    name: "rleave",
    description: "leave the channel",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {

        const channel = interaction.member.voice.channel;

        if (channel) {
  
          interaction.guild.me.voice.disconnect()
  
          client.succes({ succes: "Succesfully leaved the voicechannel!"}, interaction)
        } else {
          return client.noChannel({}, interaction)
        }
    }
}