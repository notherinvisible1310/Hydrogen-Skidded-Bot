const { EmbedBuilder, ButtonBuilder , ButtonStyle, ActionRowBuilder } = require("discord.js");
const HydrogenClientEvent = require("../../structures/Eventhandler");

class QueueEnd extends HydrogenClientEvent{
    get name(){
        return 'queueEnd';
    }
    async run(player){
        try{
            player.message.delete();
        let ch = this.client.channels.cache.get(player.textChannel);
        let db = await this.client.data.get(`${player.guildId}-autoPlay`);
        if(!db || db === null) this.client.data.set(`${player.guildId}-autoPlay`,`disbaled`);
        if(db === `enabled`)
        {
            player.autoplay(true);
        }
        if(db === `disabled`){
        let guild = this.client.guilds.cache.get(player.guildId);
        let em = new EmbedBuilder().setColor(this.client.config.color).setAuthor({name : `| Queue Concluded` , iconURL : guild.iconURL({dynamic : true})});
        let but1 = new ButtonBuilder().setStyle(ButtonStyle.Link).setURL(`https://top.gg/bot/1087069459518332969/vote`);
        let row = new ActionRowBuilder().addComponents(but1);
        await ch.send({embeds : [em],components : [row]});
        }
        } catch(e) { }
    }
}
module.exports = QueueEnd;