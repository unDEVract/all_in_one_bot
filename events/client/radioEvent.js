const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const client = require("../../index");

client.on("interactionCreate", async (interaction) => {
    try {
        const playRadio = (radio, name) => {
            const connection = joinVoiceChannel({
                channelId: interaction.member.voice.channel.id,
                guildId: interaction.guild.id,
                adapterCreator: interaction.guild.voiceAdapterCreator
            });

            const player = createAudioPlayer();
            let resource = createAudioResource(`${radio}`);

            player.play(resource);
            connection.subscribe(player);

            client.succes({ succes: `Succesfully playing \`${name}\`` }, interaction)
            player.on(AudioPlayerStatus.Idle, () => {
                interaction.guild.me.voice.disconnect()
            })
        }
        if (!interaction.isSelectMenu()) return;

        if (interaction.values == "radio538-option") {
            playRadio('https://www.mp3streams.nl/zender/538-non-stop/stream/52-mp3-128', 'Radio 538 Non-stop')
        } else if (interaction.values == "qmusic-optios") {
            playRadio('https://www.mp3streams.nl/zender/qmusic-non-stop/stream/125-mp3-96', 'Qmusic Non-stop')
        } else if (interaction.values == "slam-option") {
            playRadio('https://www.mp3streams.nl/zender/slam-juize/stream/95-aac-96', 'Slam Non-stop')
        } else if (interaction.values == "") {
            playRadio('https://www.mp3streams.nl/zender/sky-radio-non-stop-work/stream/62-mp3-128', 'Skyradio Non-stop')
        } else if (interaction.values == "") {
            playRadio('https://www.mp3streams.nl/zender/veronica-non-stop/stream/71-mp3-128', 'Veronica Non-stop')
        }

    } catch (error) {
        client.error({ error: "> An error has occurred!", reply: true }, interaction)
    }

});
    // © Source Development 2022