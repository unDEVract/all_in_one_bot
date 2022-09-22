const { Client, Collection, MessageEmbed } = require("discord.js");
const db = require('quick.db');
const Distube = require('distube');
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const client = new Client({
    restTimeOffset: 0,
    intents: [32767],
    partials: [
      'CHANNEL',
  ]
  });
module.exports = client;

client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

require("./handler")(client);
require("./handler/embed")(client);
require("./handler/index")(client);

client.login(client.config.token);

console.log(
    "\x1b[31m","Bot goed opgestart! hij is klaar om een slipper te geven.", "\x1b[0m"
)