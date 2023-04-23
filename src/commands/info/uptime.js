const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const HydrogenCommand = require("../../structures/HydrogenCommand");
const moment = require(`moment`);
require(`moment-duration-format`);
class Uptime extends HydrogenCommand{
    get name(){
        return 'uptime';
    }
   get aliases(){
        return ['up']
    }
    get cat(){
        return 'info'
    }
    async run(client,message,args,prefix){
        let uptime = moment.duration(message.client.uptime).format(`D[days], H[hrs], m[mins]`);
        let e = new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.uptime} **I Am Alive Since** ${uptime}`);
      return message.channel.send({embeds : [e]});
    }
}
module.exports = Uptime;