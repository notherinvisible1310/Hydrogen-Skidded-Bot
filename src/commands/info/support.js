const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const HydrogenCommand = require(`../../structures/HydrogenCommand`);
class Support extends HydrogenCommand{
    get name(){
        return 'support'
    }
    get cat(){
        return 'info';
    }
    async run(client,message,args,prefix){
        return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setDescription(`Get the support here`)],components : [
            new ActionRowBuilder().addComponents(new ButtonBuilder().setStyle(ButtonStyle.Link).setLabel(`Support`).setURL(client.config.server))
        ]});
    }
}
module.exports = Support;