const { EmbedBuilder } = require("discord.js");
const HydrogenCommand = require("../../structures/HydrogenCommand");

class Volume extends HydrogenCommand{
    get name(){
        return 'volume'
    }
    get aliases(){
        return ['vol']
    }
    get player(){
        return false;
    }
    get cat(){
        return 'music'
    }
     get vote(){
        return false;
    }
    get inVoice(){
        return true;
    }
    get sameVoice(){
        return true;
    }
    async run(client,message,args,prefix){
        let player = client.poru.players.get(message.guild.id);
        if(!player){
            return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setAuthor({name : `| I am not playing Anything` , iconURL : message.author.displayAvatarURL({dynamic : true})})]})
        }
        if(!args[0])
        {
            return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setAuthor({name : `| Current Volume of the player is ${player.volume}%` , iconURL : message.author.displayAvatarURL({dynamic : true})})]})
        }
        let vol = Number(args[0])
        if(vol < 0 || vol >150){
            return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setAuthor({name : `| Given args must lie between <0 - 150>` , iconURL : message.author.displayAvatarURL({dynamic : true})})]})
        }
        player.setVolume(vol);
        return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setAuthor({name : `| Player's Volume has been changed to ${vol}%` , iconURL : message.author.displayAvatarURL({dynamic : true})})]})
    }
}
module.exports = Volume;