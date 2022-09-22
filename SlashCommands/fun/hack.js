const discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: 'hack',
    description: 'Hack some people!!',
    options: [{
        name: "target",
        type: "USER",
        description: "The target",
        required: false
    }],
    run: async (client, interaction, args) => {
        var user = interaction.options?.getUser("target")

        function wait(ms) {
            let start = new Date().getTime();
            let end = start;
            while (end < start + ms) {
                end = new Date().getTime();
            }
        }

        let embed = new discord.MessageEmbed()
            .setTitle("Hack Status")
            .setDescription(`Hacking  ${user}...`)
            .setColor(client.config.embeds.Color)
            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setTimestamp();
        interaction.reply({ embeds: [embed] })

        let embed2 = new discord.MessageEmbed()
            .setTitle('Status: 0%')
            .setDescription(`Search for user information..`)
            .setColor(client.config.embeds.Color)
            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setTimestamp();
        interaction.channel.send({ embeds: [embed2] }).then(msg => {
            wait(133);
            let embed = new discord.MessageEmbed()
                .setTitle('Status: 12%')
                .setDescription(`Search for IP address...`)
                .setColor(client.config.embeds.Color)
                .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                .setTimestamp();
            msg.edit({ embeds: [embed] }).then(i => {

                wait(140);
                let embed2 = new discord.MessageEmbed()
                    .setTitle('Status: 35%')   
                    .setDescription(`**IP address:** 127.0.0.1`)
                    .setColor(client.config.embeds.Color)
                    .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                    .setTimestamp();
                msg.edit({ embeds: [embed2] }).then(i => {

                    wait(60);
                    let embed3 = new discord.MessageEmbed()
                        .setTitle('Status: 68%')
                        .setDescription(`Search for Discord login info...`)
                        .setColor(client.config.embeds.Color)
                        .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                        .setTimestamp();
                    msg.edit({ embeds: [embed3] }).then(i => {

                        wait(230);
                        let embed4 = new discord.MessageEmbed()
                            .setTitle('Status: 73%')
                            .setDescription(`**Email:** \`${user.username}@source.dev\` \n**Password:** \`SourceDevelopmentBestServer123\``)
                            .setColor(client.config.embeds.Color)
                            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                            .setTimestamp();
                        msg.edit({ embeds: [embed4] }).then(i => {

                            wait(200);
                            let embed5 = new discord.MessageEmbed()
                                .setTitle('Status: 86%')
                                .setDescription(`Search for Discord token...`)
                                .setColor(client.config.embeds.Color)
                                .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                                .setTimestamp();
                            msg.edit({ embeds: [embed5] }).then(i => {

                                wait(200);
                                fetch(`https://some-random-api.ml/bottoken`).then((res) => res.json()).catch({}).then(async (json) => {
                                    let embed6 = new discord.MessageEmbed()
                                        .setDescription(`${json.token}`)
                                        .setColor(client.config.embeds.Color)
                                        .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                                        .setTimestamp();
                                    msg.edit({ embeds: [embed6] }).then(i => {

                                        wait(180);
                                        let embed7 = new discord.MessageEmbed()
                                            .setTitle('Status: 99%')
                                            .setDescription(`Reporting account to Discord for breaking TOS...`)
                                            .setColor(client.config.embeds.Color)
                                            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                                            .setTimestamp();
                                        msg.edit({ embeds: [embed7] }).then(i => {

                                            wait(180);
                                            msg.delete();
                                            interaction.channel.send(`Succesfuly hacked ${user}.`);
                                        })
                                    })
                                }).catch({})
                            })
                        })
                    })
                })
            })
        })
    },
};