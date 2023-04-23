const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const HydrogenCommand = require("../../structures/HydrogenCommand");

class ping extends HydrogenCommand {
    get name(){
        return 'ping'
    }
    get cat(){
        return 'info'
    }
    async run(client,message,args,prefix){
                let e = new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.ping} | **My Ping Is** ${client.ws.ping}`);
      return message.channel.send({embeds : [e]});
    }
}
module.exports = ping;