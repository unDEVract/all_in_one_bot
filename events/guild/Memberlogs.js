const { MessageEmbed } = require("discord.js");
const embed = require("../../handler/embed");
const client = require("../../index");
client.on("guildMemberAdd", async (member) => {
    member.guild.invites.fetch().then(newInvites => {
        const oldInvites = client.invites.get(member.guild.id);
        const invite = newInvites.find(i => i.uses > oldInvites.get(i.code));
        const inviter = client.users.cache.get(invite.inviter.id);
        message = inviter ? `${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.` : `${member.user.tag} joined but I couldn't find through which invite.`;

        const embed = new MessageEmbed()
            .setTitle("New Member")
            .setDescription(`${message}`)
            .setColor(client.config.embeds.Color)
            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setTimestamp();
        client.channels.cache
            .get(client.config.channels.welcome_leave)
            .send({ embeds: [embed] })
    });
})
client.on("guildMemberRemove", async (member) => {
    const embed = new MessageEmbed()
        .setTitle("Bye Member")
        .setDescription(`${message}`)
        .setColor(client.config.embeds.Color)
        .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setTimestamp();
    client.channels.cache
        .get(client.config.channels.welcome_leave)
        .send({ embeds: [embed] })
})