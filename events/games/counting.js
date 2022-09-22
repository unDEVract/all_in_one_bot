const db = require("quick.db");
const client = require("../../index");

client.on('messageCreate', message => {
    if (message.author.bot || isNaN(message.content)) return;

    if (message.channel.id === client.config.games.counting) {

        const numdb = db.get("numdb");
        const usercount = db.get("usercount");

        if (message.author.id == usercount) {
            try {

                client.error({ error: "The last number was also from you. The new number is **1**"}, message)

                db.set("numdb", 1);
                db.delete("usercount");
                return message.react("⚠️");
            }
            catch { }
        }

        if (message.content == `${numdb}`) {

            db.add("numdb", 1);
            db.set("usercount", message.author.id)

            message.react("✅");

        } else if (!isNaN(message.content) && message.content != `${numdb}`) {

            db.set("numdb", 1);
            db.delete("usercount");

            client.error({ error: `${message.author} ruined it at **${numdb - 1}**. The new number is **1**` }, message)

            message.react("⚠️");

        };
    };
})