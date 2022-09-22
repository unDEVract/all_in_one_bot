const discord = require('discord.js');

module.exports = {
    name: 'simprate',
    description: 'See how simp you are',
    options: [{
        name: "target",
        type: "USER",
        description: "The target",
        required: false
    }],
    run: async (client, interaction, args) => {
        var user = interaction.options?.getUser("target") ? interaction.options?.getUser("target") : interaction.user
        var result = Math.ceil(Math.random() * 100);

        client.succes({ succes: `**💕 || Simp rate**\n${user} is ${result}% a simp!` }, interaction)
    },
};