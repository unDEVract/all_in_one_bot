const discord = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
    name: "meme",
    description: "Gives a meme from reddit",
    /** 
     * @param {Client} client 
     * @param {Interaction} interaction 
     * @param {String[]} args 
     */
    run: async (client, interaction, args) => {

        fetch('https://www.reddit.com/r/memes/random/.json').then(resp => resp.json()).then(output => {

            var permaLink = output[0].data.children[0].data.permaLink;
            var memeUrl = `https://www.reddit.com${permaLink}`;
            var memeImg = output[0].data.children[0].data.url;
            var memeTitle = output[0].data.children[0].data.title;

            var embed = new discord.MessageEmbed()
                .setTitle(`${memeTitle}`)
                .setURL(`${memeUrl}`)
                .setImage(`${memeImg}`)
                .setColor('RANDOM')

            interaction.reply({ embeds: [embed] });
        })
    }
}