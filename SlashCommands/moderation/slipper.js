const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { adminrole } = require('../settings.json');

module.exports = {
    name: "slipper",
    type: "CHAT_INPUT",
    description: "ban a user",
    UserPerms: ['KICK_MEMBERS'],
    BotPerms: ["KICK_MEMBERS"],
    options: [{
        name: "user",
        type: "USER",
        required: true,
        description: "The user you want to ban"
    },],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction) => {
		const noperms = new MessageEmbed()
			.setTitle(`⛔ | Error`)
			.setDescription(`\n Je hebt **geen** permissies voor dit command!`)
			.setColor(`#ff001e`)
			.setFooter({ text: "Minecraft Development - V2", iconURL: "https://media.discordapp.net/attachments/520935348759560192/977856326325641276/MinecraftDevelopment_Logo.png"})
		
        const user = interaction.options.getMember('user')

		if (!interaction.member.roles.cache.some(role => role.name === adminrole)) return interaction.reply({ embeds: [noperms], ephemeral: true });

		interaction.reply(`Weet je zeker dat je deze flikker (${user}) een slipper wilt geven? 🩴`)

		const filter = m => m.content.includes('ja') || m.content.includes('natuurlijk') || m.content.includes('nee') || m.content.includes('niet');
		const filter2 = m => m.content.includes('kicken') || m.content.includes('bannen');
		const collector = interaction.channel.createMessageCollector({ filter, time: 1000 * 15 });

		collector.on('collect', m => {
			if(m.author.id === interaction.user.id) {
				if(m.content.includes("ja") || m.content.includes("natuurlijk")) {
					interaction.channel.send(`Moet ik deze klootzak (${user}) kicken of bannen? 🩴`)
					collector.stop()
					const collector2 = interaction.channel.createMessageCollector({ filter2, time: 1000 * 15 });
					collector2.on('collect', m => {
						if(m.author.id === interaction.user.id) {
							if(m.content.includes("bannen")) {
								interaction.channel.send(`Oke, ik ga hem nu uit onze discord slipperrrrrrren! 🩴\nGelukt! ${user} is succesvol uit de discord geslipperd (verbannen)!`)
								user.ban()
								collector2.stop()
							}
							if(m.content.includes("kicken")) {
								interaction.channel.send(`Oke, ik ga hem nu uit onze discord slipperrrrrrren! 👢\nGelukt! ${user} is succesvol uit de discord geslipperd (gekicked)!`)
								user.kick()
								collector2.stop()
							}
						}
					})
				}
				if(m.content.includes("nee") || m.content.includes("niet")) {
					interaction.channel.send(`Ik heb het geaunnuleerd, ${interaction.user}!`)
					collector.stop()
				}
			}
		});

		// collector.on('end', collected => {
		// 	console.log(`Collected ${collected.size} items`);
		// });
    }
}