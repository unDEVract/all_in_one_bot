const weather = require('weather-js');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "weather",
    description: "Shows the weather",
    options: [{
        name: "city",
        type: "STRING",
        description: "The name of the city",
        required: true
    }],
    run: async (client, interaction, args) => {
        var cityName = interaction.options.getString("city") ? interaction.options.getString("city") : null

        weather.find({ search: cityName, degreeType: 'C' }, function (err, result) {

            if (result.length === 0) {
                client.error({ error: `I can't find a city with the name ${cityName}` }, interaction)
                return undefined;
            }

            var current = result[0].current;
            var location = result[0].location;

            const embed = new MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`weather in ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .addField('**TimeZone**', `UTC ${location.timezone}`, true)
                .addField('**Degree Type**', `${location.degreetype}`, true)
                .addField('**Temperaturer**', `${current.temperature} Degrees`, true)
                .addField('**Feels like**', `${current.feelslike} Degrees`, true)
                .addField('**Wind**', `${current.winddisplay}`, true)
                .addField('**Humidity**', `${current.humidity}%`, true)
                .addField('**Date**', `${current.date}`, true)
                .addField('**Day**', `${current.day}`, true)
                .setColor(client.config.embeds.Color)
                .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                .setTimestamp();

            interaction.reply({ embeds: [embed] })

        });
    }


}