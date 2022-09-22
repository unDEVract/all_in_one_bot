const client = require("../../index");
const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js')
const { createTranscript } = require('discord-html-transcripts');

client.on("interactionCreate", async (interaction) => {

    // require the logs
    const logChannel = interaction.guild.channels.cache.get(client.config.tickets.logs)


    if (interaction.isSelectMenu()) {

        if (interaction.values[0] === 'support_option') {

            const everyrole = interaction.guild.roles.cache.find(x => x.name === "@everyone").id;
            interaction.guild.channels.create(`support・${interaction.user.username}`, {
                type: 'text',
                parent: client.config.tickets.category,
                topic: interaction.user.id,
                permissionOverwrites: [
                    {
                        id: everyrole,
                        deny: ['VIEW_CHANNEL']
                    },
                    {
                        id: client.config.tickets.support,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    },
                    {
                        id: interaction.user.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    }
                ],
            }).then(async c => {

                     const embed = new MessageEmbed()
                    .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                    .setTitle(client.config.titles.succes)
                    .setDescription(`Your ticket has been opened successfully! <#${c.id}>`)
                    .setColor(client.config.embeds.Color)
                    .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                    .setTimestamp();

                await interaction.reply({ embeds: [embed], ephemeral: true })

                const embed1 = new MessageEmbed()
                    .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                    .setTitle('🎫・New Ticket!')
                    .setDescription(`<@${interaction.user.id}>, Here is youre ticket the support team from **${interaction.guild.name}** help you as soon as possible!\n🔒・Close\n✋・Claim`)
                    .addField('📃・Author:', `<@${interaction.user.id}>`)
                    .addField('❓・Subject:', 'Wants to speak support')
                    .setColor(client.config.embeds.Color)
                    .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                    .setTimestamp();

                const row1 = new MessageActionRow()
                    .addComponents(
                        new MessageSelectMenu()
                            .setCustomId('options_ticket_menu')
                            .setPlaceholder('❌・Nothing Selected')
                            .addOptions([
                                {
                                    label: 'Close',
                                    description: 'Close the ticket',
                                    value: 'close_option',
                                    emoji: '🔒'
                                },
                                {
                                    label: 'Claim',
                                    description: 'Claim a ticket',
                                    value: 'claim_option',
                                    emoji: '👋'
                                },
                            ]),
                    )
                await c.send({ content: `${interaction.user}, <@&${client.config.tickets.support}>` })
                await c.send({ embeds: [embed1], components: [row1] })
            }
            )
        }

        if (interaction.values[0] === 'apply_option') {

            const everyrole = interaction.guild.roles.cache.find(x => x.name === "@everyone").id;
            interaction.guild.channels.create(`apply・${interaction.user.username}`, {
                type: 'text',
                parent: client.config.tickets.category,
                topic: interaction.user.id,
                permissionOverwrites: [
                    {
                        id: everyrole,
                        deny: ['VIEW_CHANNEL']
                    },
                    {
                        id: client.config.tickets.support,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    },
                    {
                        id: interaction.user.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    }
                ],
            }).then(async c => {

                const embed = new MessageEmbed()
                    .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                    .setTitle(client.config.titles.succes)
                    .setDescription(`Your ticket has been opened successfully! <#${c.id}>`)
                    .setColor(client.config.embeds.Color)
                    .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                    .setTimestamp();

                await interaction.reply({ embeds: [embed], ephemeral: true })

                const embed1 = new MessageEmbed()
                    .setTitle('🎫・New Ticket!')
                    .setDescription(`<@${interaction.user.id}>, Here is youre ticket the support team from **${interaction.guild.name}** help you as soon as possible!\n🔒・Close\n✋・Claim`)
                    .addField('📃・Author:', `<@${interaction.user.id}>`)
                    .addField('❓・Subject:', 'Wants to apply')
                    .setColor(client.config.embeds.Color)
                    .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                    .setTimestamp();

                const row1 = new MessageActionRow()
                    .addComponents(
                        new MessageSelectMenu()
                            .setCustomId('options_ticket_menu')
                            .setPlaceholder('❌・Nothing Selected')
                            .addOptions([
                                {
                                    label: 'Close',
                                    description: 'Close the ticket',
                                    value: 'close_option',
                                    emoji: '🔒'
                                },
                                {
                                    label: 'Claim',
                                    description: 'Claim a ticket',
                                    value: 'claim_option',
                                    emoji: '👋'
                                },
                            ]),
                    )
                await c.send({ content: `${interaction.user}, <@&${client.config.tickets.support}>` })
                await c.send({ embeds: [embed1], components: [row1] })
            }
            )
        }

        if (interaction.values[0] === 'report_option') {

            const everyrole = interaction.guild.roles.cache.find(x => x.name === "@everyone").id;
            interaction.guild.channels.create(`report・${interaction.user.username}`, {
                type: 'text',
                parent: client.config.tickets.category,
                topic: interaction.user.id,
                permissionOverwrites: [
                    {
                        id: everyrole,
                        deny: ['VIEW_CHANNEL']
                    },
                    {
                        id: client.config.tickets.support,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    },
                    {
                        id: interaction.user.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    }
                ],
            }).then(async c => {

                const embed = new MessageEmbed()
                    .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                    .setTitle(client.config.titles.succes)
                    .setDescription(`Your ticket has been opened successfully! <#${c.id}>`)
                    .setColor(client.config.embeds.Color)
                    .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                    .setTimestamp();

                await interaction.reply({ embeds: [embed], ephemeral: true })

                const embed1 = new MessageEmbed()
                    .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                    .setTitle('🎫・New Ticket!')
                    .setDescription(`<@${interaction.user.id}>, Here is youre ticket the support team from **${interaction.guild.name}** help you as soon as possible!\n 🔒・Close\n ✋・Claim`)
                    .addField('📃・Author:', `<@${interaction.user.id}>`)
                    .addField('❓・Subject:', 'Wants to report somthing')
                    .setColor(client.config.embeds.Color)
                    .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                    .setTimestamp();

                const row1 = new MessageActionRow()
                    .addComponents(
                        new MessageSelectMenu()
                            .setCustomId('options_ticket_menu')
                            .setPlaceholder('❌・Nothing Selected')
                            .addOptions([
                                {
                                    label: 'Close',
                                    description: 'Close the ticket',
                                    value: 'close_option',
                                    emoji: '🔒'
                                },
                                {
                                    label: 'Claim',
                                    description: 'Claim a ticket',
                                    value: 'claim_option',
                                    emoji: '👋'
                                },
                            ]),
                    )
                await c.send({ content: `${interaction.user}, <@&${client.config.tickets.support}>` })
                await c.send({ embeds: [embed1], components: [row1] })
            }
            )
        }
    }


    //=================== Ticket Select Menu ========================

    if (interaction.isSelectMenu()) {

        if (interaction.values[0] === "claim_option") {

            const embed_claim = new MessageEmbed()
                .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                .setTitle('✋・Claimed')
                .setDescription(`You are now assisted by: ${interaction.user}`)
                .setColor(client.config.embeds.Color)
                .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                .setTimestamp();

            interaction.deferUpdate()
            interaction.channel.send({ embeds: [embed_claim] })

                        // send the logs
                        const logEmbed = new MessageEmbed()
                        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                        .setTitle("✋・Claimed")
                        .setDescription("A ticket has claimed!")
                        .addFields(
                            {
                                name: `📃・Claimed by:`,
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

        }

        if (interaction.values[0] === "close_option") {

            // make the transcript
            const transcriptFile = await createTranscript(interaction.channel, {
                limit: -1,
                fileName: `${interaction.channel.name}.html`,
                returnBuffer: false
            });

            // send a succes message
            client.succes({ succes: `Ticket is closed by <@${interaction.user.id}> and wil be closed in 5 seconds!`}, interaction)

            const user = interaction.channel.topic
            const us = interaction.guild.members.cache.get(user)

            const user_embed = new MessageEmbed()
                .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                .setTitle('🗑・Closed')
                .setDescription(`Your ticket has been closed!`)
                .addField(`🌐・Guild:`, `${interaction.guild}`)
                .addField(`📃・Closed by:`, `<@${interaction.user.id}>`)
                .setColor(client.config.embeds.Color)
                .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                .setTimestamp();

            us.send({ embeds: [user_embed] })
            us.send({ files: [transcriptFile] })

            // send the logs
            const logEmbed = new MessageEmbed()
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


});
