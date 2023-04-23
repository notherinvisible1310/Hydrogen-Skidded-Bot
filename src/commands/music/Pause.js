const { EmbedBuilder } = require("discord.js");
const HydrogenCommand = require("../../structures/HydrogenCommand");

class Pause extends HydrogenCommand{
    get name(){
        return 'pause';
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
        if(player.isPaused){
            return message.channel.send({embeds : [new EmbedBuilder().setColor(client.comfig.color).setAuthor({name : `| Player is already paused` , iconURL : message.author.displayAvatarURL({dynamic : true})})]})
        }
        else{
            player.pause(true);
            return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setAuthor({name : `| Paused The player` , iconURL : message.author.displayAvatarURL({dynamic : true})})]})
        }
    }
}
module.exports = Pause;