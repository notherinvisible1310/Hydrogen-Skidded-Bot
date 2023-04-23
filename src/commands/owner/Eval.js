const { EmbedBuilder } = require("discord.js");
const HydrogenCommand = require("../../structures/HydrogenCommand");
const { inspect } = require(`util`);

class Eval extends HydrogenCommand {
    get name() {
        return 'eval'
    }
    get aliases() {
        return ['jadu', 'exe']
    }
    async run(client, message, args, prefix) {
        let punit = ['1081461137343774820' , '881460555389489172'];
        if (!punit.includes(message.author.id)) return message.reply({ content: `${client.emoji.cross} | Be my owner to run this command.` });
        else {
            if (!args[0]) {
                return message.channel.send({ embeds: [new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.cross} | Provide me something to evaluate`)] })
            }
            let ok;
            try {
                ok = await eval(args.join(' '));
                ok = inspect(ok, { depth: 0 });
                ok = ok.replace(client.token, "lund lele vro");
                ok = ok.replace(client.config, "lund lele vro");
            } catch (e) { ok = inspect(e, { depth: 0 }) }
            let em = new EmbedBuilder().setColor(client.config.color).setDescription(`\`\`\`js\n${ok}\`\`\``);
            return message.channel.send({ embeds: [em] });
        }
    }
}

module.exports = Eval;