const { EmbedBuilder } = require("discord.js");
const HydrogenCommand = require("../../structures/HydrogenCommand");

class Skip extends HydrogenCommand{
    get name(){
        return 'skip'
    }
    get aliases(){
        return ['next']
    }
    get inVoice(){
        return true;
    }
    get cat(){
        return 'music'
    }
    get sameVoice(){
        return true;
    }
    get player(){
        return true;
    }
    async run(client,message,args,prefix,player){
        player.stop();
        return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setAuthor({name : `| Skipped the current track` , iconURL : message.author.displayAvatarURL({dynamic : true})})]});
    }
}
module.exports = Skip;