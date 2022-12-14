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
            name: "Plofkraak",
            value: "plof"
        },
        {
            name: "Casino",
            value: "cas"
        },
        {
            name: "Keypad",
            value: "key"
        },
        {
            name: "Crypto",
            value: "cry"
        },
        {
            name: "Vendings",
            value: "ven"
        },
        {
            name: "Tutorial",
            value: "tut"
        },
        {
            name: "Grabbelton",
            value: "grab"
        },
        {
            name: "Taakstraf",
            value: "taak"
        },
        {
            name: "Zakkenrollen",
            value: "zak"
        },
        {
            name: "Politie",
            value: "pol"
        },
        {
            name: "Vehicles",
            value: "veh"
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

            const noOption = new MessageEmbed()
            .setTitle("πγ»Geen optie gekozen! Kies uit:")
            .addField("π§¨ | Plofkraak", "`/product option:plofkraak`", false)
            .addField("πͺ | Casino", "`/product option:casino`", false)
            .addField("π± | Keypad", "`/product option:keypad`", false)
            .addField("π | Crypto", "`/product option:crypto`", false)
            .addField("π | Vendings", "`/product option:vendings`", false)
            .addField("β | Tutorial", "`/product option:tutorial`", false)
            .addField("π· | Grabbelton", "`/product option:grabbelton`", false)
            .addField("π³ | Taakstraf", "`/product option:taakstraf`", false)
            .addField("π€ | Zakkenrollen", "`/product option:zakkenrollen`", false)
            .addField("π± | Politie", "`/product option:politie`", false)
            .addField("π | Vehicles", "`/product option:vehicles`", false)
            .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setColor(client.config.embeds.Color)
            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setTimestamp();

        } else {



        }


    }
}