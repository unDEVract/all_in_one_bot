const { Client, Interaction, MessageEmbed } = require('discord.js');

module.exports = {
    name: '8ball',
    description: "Ask a question to the bot!",
    /** 
     * @param {Client} client 
     * @param {Interaction} interaction 
     * @param {String[]} args 
     */
    options: [{
        name: "question",
        type: "STRING",
        description: "The question to be answered",
        required: true
    }],
    run: async (client, interaction, args) => {
        const question = interaction.options.getString('question')

        let answers = ['yes', 'no', 'maybe', '100%!!!', 'nah', 'ok?', 'are u fricking dumb? Ofcourse not']

        let number = Math.floor(Math.random() * answers.length)

        const embed = new MessageEmbed()
            .setTitle('🧭 • 8ball')
            .addFields(
                { name: 'Question:', value: question },
                { name: 'Answer:', value: answers[number] }
            )
            .setColor(client.config.embeds.Color)
            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setTimestamp();


        interaction.reply({ embeds: [embed] })
    }
}