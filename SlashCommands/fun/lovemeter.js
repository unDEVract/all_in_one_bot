const { Client, Interaction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'lovemeter',
    description: "shows love of 2 people",
    /** 
     * @param {Client} client 
     * @param {Interaction} interaction 
     * @param {String[]} args 
     */
    options: [{
        name: "user1",
        type: "USER",
        description: "Target 1",
        required: true
    }, {
        name: "user2",
        type: "USER",
        description: "Target 2",
        required: false
    }],
    run: async (client, interaction, args) => {
        var result = Math.ceil(Math.random() * 100);
        var user1 = interaction.options?.getUser("user1")
        var user2 = interaction.options?.getUser("user2") ? interaction.options?.getUser("user2") : interaction.user

        client.succes({ succes: `**❤️ || Love rate**\n${user1} and ${user2} match ${result}%!` }, interaction)
    }
}