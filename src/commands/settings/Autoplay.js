const { PermissionsBitField, EmbedBuilder } = require("discord.js");
const HydrogenCommand = require("../../structures/HydrogenCommand")

class autoPlay extends HydrogenCommand{
    get name(){
        return 'autoplay';
    }
    get aliases(){
        return ['ap','auto']
    }
    get vote(){
        return false;
    }
    get cat(){
        return 'set'
    }
    get player(){
        return true;
    }
    get inVoice(){
        return true;
    }
    get sameVoice(){
        return true;
    }
    async run(client,message,args,prefix){
        let data = await client.data.get(`${message.guild.id}-autoPlay`);
        if(!data) await client.data.set(`${message.guild.id}-autoPlay`,`disabled`);
        if(data === `disabled`){
            client.data.set(`${message.guild.id}-autoPlay`,`enabled`);
            return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setAuthor({name : `| Enabled Autoplay Mode of ${client.user.username}` , iconURL : message.author.displayAvatarURL({dynamic : true})})]})
        }
        else if(data === `enabled`){
            client.data.set(`${message.guild.id}-autoPlay`,`disabled`);
            return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setAuthor({name : `| Disabled Autoplay Mode of ${client.user.username}` , iconURL : message.author.displayAvatarURL({dynamic : true})})]})
        }
        else{
            client.data.set(`${message.guild.id}-autoPlay`,`disabled`);
            return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setAuthor({name : `| Please try again running that command` , iconURL : message.author.displayAvatarURL({dynamic : true})})]})
        }
    }
}
module.exports = autoPlay;