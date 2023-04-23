const { EmbedBuilder } = require("discord.js");
const HydrogenCommand = require("../../structures/HydrogenCommand");

class Restart extends HydrogenCommand{
    get name(){
        return 'restart';
    }
    get aliases(){
        return ['replay'];
    }
    get cat(){
        return 'music'
    }
    get player(){
        return true;
    }
    get inVoice(){
        return true
    }
    get sameVoice(){
        return true;
    }
    async run(client,message,args,prefix,player){
        player.seekTo(0);
        return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setAuthor({name : `| Restarted the current song` , iconURL : message.author.displayAvatarURL({dynamic : true})})]})
    }
}
module.exports = Restart;