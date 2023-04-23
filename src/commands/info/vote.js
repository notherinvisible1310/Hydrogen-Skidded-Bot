const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const HydrogenCommand = require("../../structures/HydrogenCommand");

class Vote extends HydrogenCommand{
    get name(){
        return 'vote'
    }
    get aliases(){
        return []
    }
    get cat(){
        return 'info'
    }
    async run(client,message,args,prefix){
        let em = new EmbedBuilder().setColor(client.config.color).setDescription(`Click here to vote me.`);
        let row = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setStyle(ButtonStyle.Link).setURL(`https://top.gg/bot/1087069459518332969/vote`).setLabel(`Vote`)
        );
        return message.channel.send({embeds : [em] , components : [row]});
    }
}
module.exports = Vote;