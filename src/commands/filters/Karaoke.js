const HydrogenCommand = require("../../structures/HydrogenCommand");
const { EmbedBuilder } = require(`discord.js`);
class Karaoke extends HydrogenCommand{
    get name(){
        return 'karaoke'
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
       player.filters.setKaraoke(!player.filters.karaoke);
        return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setAuthor({name : `| ${player.filters.karaoke ? `Enabled` : `Disabled`} Karaoke mode of the player`,iconURL : message.author.displayAvatarURL({dynamic : true})})]})
    }
}
module.exports = Karaoke;