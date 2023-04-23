const HydrogenCommand = require("../../structures/HydrogenCommand");
const { EmbedBuilder } = require(`discord.js`);
class Vaporwave extends HydrogenCommand{
    get name(){
        return 'vaporwave'
    }
    get aliases(){
        return null;
    }
    get inVoice(){
        return true;
    }
    get sameVoice(){
        return true;
    }
    get cat(){
        return 'filters'
    }
     get vote(){
        return false;
    }
    get player(){
        return true;
    }
    async run(client,message,args,prefix,player){
        player.filters.setVaporwave(!player.filters.vaporwave);
        return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setAuthor({name : `| ${player.filters.vaporwave ? `Enabled` : `Disabled`} Vaporwave mode of the player`,iconURL : message.author.displayAvatarURL({dynamic : true})})]})
    }
}
module.exports = Vaporwave;