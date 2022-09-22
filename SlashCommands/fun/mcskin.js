const { Client, Interaction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'mcskin',
    description: "Watch a user his minecraft skin!",
    /** 
     * @param {Client} client 
     * @param {Interaction} interaction 
     * @param {String[]} args 
     */
    options: [{
        name: "mc-name",
        type: "STRING",
        description: "The name of the user you want the skin from",
        required: true
    }],
    run: async (client, interaction, args) => {
        const mcName = interaction.options.getString('mc-name')

        const embed = new MessageEmbed()
            .setTitle(`📘 • Minecraft Skin`)
            .setColor(client.config.embeds.Color)
            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setDescription(`This is the mc-skin from \`${mcName}\`.`)
            .setImage(`https://minotar.net/armor/body/${mcName}/100.png`)
            .setThumbnail(`https://minotar.net/helm/${mcName}/100.png`)
            .setTimestamp();

        interaction.reply({ embeds: [embed] })
    }
}