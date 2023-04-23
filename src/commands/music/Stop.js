const { EmbedBuilder } = require("discord.js");
const HydrogenCommand = require("../../structures/HydrogenCommand")

class Stop extends HydrogenCommand{
    get name(){
        return 'stop';
    }
    get player(){
        return true;
    }
    get cat(){
        return 'music'
    }
    get inVoice(){
        return true;
    }
    get sameVoice(){
        return true;
    }
    async run(client,message,args,prefix,player){
        player.destroy();
        return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setAuthor({name : `| Destroyed the player` , iconURL : message.author.displayAvatarURL({dynamic : true})})]})
    }
}
module.exports = Stop;