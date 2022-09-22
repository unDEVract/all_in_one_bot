const { Client, CommandInteraction, MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js");
const Discord = require("discord.js")



module.exports = {
    name: "help",
    description: "See al the commands",
    type: 'CHAT_INPUT',
    options: [{
        name: "category",
        required: false,
        type: "STRING",
        description: "the category of commands",
        choices: [{
            name: "fun",
            value: "fun"
        },
        {
            name: "giveaway",
            value: "giveaway"
        },
        {
            name: "information",
            value: "information"
        },
        {
            name: "moderation",
            value: "moderation"
        },
        {
            name: "music",
            value: "music"
        },
        {
            name: "radio",
            value: "radio"
        },
        {
            name: "tickets",
            value: "tickets"
        },
        {
            name: "utility",
            value: "utility"
        },
    ],
    }],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

        const optionss = interaction.options.getString("category")

        if (!optionss) {

        const HelpEmbed = new MessageEmbed()
        .setTitle("📋・Help menu!")
        .addField("😂・Fun", "`/help category:fun`", false)
        .addField("🎉・giveaway", "`/help category:giveaway`", false)
        .addField("📘・information", "`/help category:information`", false)
        .addField("📌・moderation", "`/help category:moderation`", false)
        .addField("🎶・music", "`/help category:music`", false)
        .addField("📻・radio", "`/help category:radio`", false)
        .addField("🎫・tickets", "`/help category:tickets`", false)
        .addField("📰・utility", "`/help category:utility`", false)
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setColor(client.config.embeds.Color)
        .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTimestamp();

       interaction.reply({ embeds: [HelpEmbed]})
        } else {

            const FunEmbed = new MessageEmbed()
            .setTitle("😂・Fun Commands!")
            .addFields(
                {
                    name: "`/8ball`",
                    value: "Ask a question to the bot!",
                    inline: true
                },
                {
                    name: "`/emojitext`",
                    value: "send text to emojis",
                    inline: true
                },
                {
                    name: "`/hack`",
                    value: "Hack some people!!",
                    inline: true
                },
                {
                    name: "`howgay`",
                    value: "See how gay you are",
                    inline: true
                },
                {
                    name: "`/lovemeter`",
                    value: "shows love of 2 people",
                    inline: true
                },
                {
                    name: "`/mcskin`",
                    value: "Watch a user his minecraft skin!",
                    inline: true
                },
                {
                    name: "`/meme`",
                    value: "Gives a meme from reddit",
                    inline: true
                },
                {
                    name: "`/simprate`",
                    value: "See how simp you are",
                    inline: true
                },
                {
                    name: "`/weather`",
                    value: "Shows the weather",
                    inline: true
                },
            )
            .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setColor(client.config.embeds.Color)
            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setTimestamp();

        if(interaction.options.getString("category") === "fun") return interaction.reply({ embeds: [FunEmbed]})

        const giveawayEmbed = new MessageEmbed()
        .setTitle("🎉・Giveaway Commands!")
        .addFields(
            {
                name: "`/gdelete`",
                value: "delete a giveaway",
                inline: true
            },
            {
                name: "`/gend`",
                value: "end a giveaway",
                inline: true
            },
            {
                name: "`/gpause`",
                value: "pause a giveaway",
                inline: true
            },
            {
                name: "`/greroll`",
                value: "reroll a giveaway",
                inline: true
            },
            {
                name: "`/gresume`",
                value: "resume a giveaway",
                inline: true
            },
            {
                name: "`/gstart`",
                value: "start a giveaway",
                inline: true
            },
        )
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setColor(client.config.embeds.Color)
        .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTimestamp();

        if(interaction.options.getString("category") === "giveaway") return interaction.reply({ embeds: [giveawayEmbed]})

        const informationEmbed = new MessageEmbed()
        .setTitle("📘・information Commands!")
        .addFields(
            {
                name: "`/help`",
                value: "See al the commands",
                inline: true
            },
            {
                name: "`/invites`",
                value: "See your invites",
                inline: true
            },
            {
                name: "`/members`",
                value: "see The server membercount!",
                inline: true
            },
            {
                name: "`/ping`",
                value: "see the bot ping",
                inline: true
            },
        )
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setColor(client.config.embeds.Color)
        .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTimestamp();

        if(interaction.options.getString("category") === "information") return interaction.reply({ embeds: [informationEmbed]})

        const moderationEmbed = new MessageEmbed()
        .setTitle("📌・moderation Commands!")
        .addFields(
            {
                name: "`/ban`",
                value: "ban a user",
                inline: true
            },
            {
                name: "`/kick`",
                value: "kick a user",
                inline: true
            },
            {
                name: "`/lock`",
                value: "lock a channel",
                inline: true
            },
            {
                name: "`/timeout`",
                value: "timeout a user",
                inline: true
            },
            {
                name: "`/unlock`",
                value: "unlock a channel",
                inline: true
            },
        )
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setColor(client.config.embeds.Color)
        .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTimestamp();

        if(interaction.options.getString("category") === "moderation") return interaction.reply({ embeds: [moderationEmbed]})

        const musicEmbed = new MessageEmbed()
        .setTitle("🎶・music Commands!")
        .addFields(
            {
                name: "`/join`",
                value: "let the bot join a voice channel",
                inline: true
            },
            {
                name: "`/loop`",
                value: "set a loop for the current song or queue",
                inline: true
            },
            {
                name: "`/nowplaying`",
                value: "see the now playing song",
                inline: true
            },
            {
                name: "`/pause`",
                value: "pause the currently playing song",
                inline: true
            },
            {
                name: "`/play`",
                value: "play a song with the bot",
                inline: true
            },
            {
                name: "`/queue`",
                value: "get the guild queue",
                inline: true
            },
            {
                name: "`/resume`",
                value: "resume the currently playing song",
                inline: true
            },
            {
                name: "`/skip`",
                value: "skip a song in the queue",
                inline: true
            },
            {
                name: "`/stop`",
                value: "stop the bot playing music",
                inline: true
            },
            {
                name: "`/volume`",
                value: "adjust the bot volume",
                inline: true
            },
        )
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setColor(client.config.embeds.Color)
        .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTimestamp();


        if(interaction.options.getString("category") === "music") return interaction.reply({embeds: [musicEmbed]})

        const radioEmbed = new MessageEmbed()
        .setTitle("📻・radio Commands!")
        .addFields(
            {
                name: "`/rplay`",
                value: "send the radio embed",
                inline: true
            },
            {
                name: "`/rleave`",
                value: "leave the channel",
                inline: true
            },
        )
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setColor(client.config.embeds.Color)
        .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTimestamp();

        if(interaction.options.getString("category") === "radio") return interaction.reply({ embeds: [radioEmbed]})
        
        const TicketEmbed = new MessageEmbed()
        .setTitle("🎫・ticket Commands!")
        .addFields(
            {
                name: "`/add`",
                value: "send the radio embed",
                inline: true
            },
            {
                name: "`/claim`",
                value: "leave the channel",
                inline: true
            },
            {
                name: "`/close`",
                value: "close a ticket",
                inline: true
            },
            {
                name: "`/panel`",
                value: "send the ticket panel",
                inline: true
            },
            {
                name: "`/remove`",
                value: "remove a user from a ticket",
                inline: true
            },
            {
                name: "`/transcript`",
                value: "transcript a ticket",
                inline: true
            },
        )
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setColor(client.config.embeds.Color)
        .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTimestamp();

        if(interaction.options.getString("category") === "tickets") return interaction.reply({ embeds: [TicketEmbed]})

        const utilEmbed = new MessageEmbed()
        .setTitle("📰・Utility Commands!")
        .addFields(
            {
                name: "`/announce`",
                value: "announce something",
                inline: true
            },
            {
                name: "`/poll`",
                value: "Make a poll",
                inline: true
            },
            {
                name: "`/review`",
                value: "Leave a review",
                inline: true
            },
            {
                name: "`/say`",
                value: "say something",
                inline: true
            },
            {
                name: "`/suggestion`",
                value: "Leave a suggestion",
                inline: true
            },
        )
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setColor(client.config.embeds.Color)
        .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTimestamp();

        if(interaction.options.getString("category") === "utility") return interaction.reply({ embeds: [utilEmbed]})


        }


    }
}