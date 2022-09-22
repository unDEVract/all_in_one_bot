const discord = require('discord.js');

module.exports = {
    name: 'howgay',
    description: 'See how gay you are',
    options: [{
        name: "target",
        type: "USER",
        description: "The target",
        required: false
    }],
    run: async (client, interaction, args) => {
        var user = interaction.options?.getUser("target") ? interaction.options?.getUser("target") : interaction.user
        var result = Math.ceil(Math.random() * 100);
        client.succes({ succes: `**🏳️‍🌈 || Gay rate**\n${user} is ${result}% gay!` }, interaction)
    },
};