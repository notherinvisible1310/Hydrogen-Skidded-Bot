const { PermissionsBitField, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, messageLink, WebhookClient } = require("discord.js");
const HydrogenClientEvent = require(`../../structures/Eventhandler`);
class HydrogenGuildDelete extends HydrogenClientEvent{
    get name(){
        return 'guildDelete'
    }
    async run(guild){
        try{
        this.client.data.set(`${guild.id}-247`,`disabled`);
        this.client.data.set(`${guild.id}-autoPlay`,`disabled`);
        this.client.data2.set(`noprefix_${guild.id}`,[]);
          
    let embed = new EmbedBuilder().setColor(this.client.config.color).setAuthor({name : ` | GUILD LEFT`,iconURL : this.client.user.displayAvatarURL()}).setDescription(
        `**Server Name :** ${guild.name}
         **ID :** ${guild.id}
        **MemberCount :** ${guild.memberCount} Members`
    ).setThumbnail(guild.iconURL({dynamic : true}));
       const web = new WebhookClient({url : `https://discord.com/api/webhooks/1097818555501793340/WY04eqQS0cAWoaOEGM5Cwd_ChRJEHY3_DnQvGlxweucpNSPbwv23jHPO_AGjRdaBCtYF`});
       web.send({embeds : [embed]});
        
    } catch(e) { 
          console.log(e) 
        }
}
}
module.exports = HydrogenGuildDelete;