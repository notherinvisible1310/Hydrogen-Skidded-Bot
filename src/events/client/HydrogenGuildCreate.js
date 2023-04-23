const { PermissionsBitField, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, messageLink, WebhookClient } = require("discord.js");
const HydrogenClientEvent = require(`../../structures/Eventhandler`);
class HydrogenGuildCreate extends HydrogenClientEvent{
    get name(){
        return 'guildCreate'
    }
    async run(guild){
        try{
        this.client.data.set(`${guild.id}-247`,`disabled`);
        this.client.data.set(`${guild.id}-autoPlay`,`disabled`);
        this.client.data2.set(`noprefix_${guild.id}`,[]);
            let owner = await guild?.fetchOwner();
           const servers = await this.client.shard.broadcastEval(c => c.guilds.cache.size).then(r => r.reduce((a, b) => a + b, 0))
           const users = await this.client.shard.broadcastEval(c => c.guilds.cache.filter(x => x.available).reduce((a, g) =>a + g.memberCount, 0)).then(r => r.reduce((acc, memberCount) => acc +   memberCount, 0))
           let embed = new EmbedBuilder().setColor(this.client.config.color).setAuthor({name : `| GUILD JOINED`,iconURL : this.client.user.displayAvatarURL()}).setDescription(
        `**Server Name :** ${guild.name} 
        **ID :** ${guild.id}
        **MemberCount :** ${guild.memberCount} Members
         **Guild Created :** <t:${Math.round(guild.createdTimestamp/1000)}:R> | **Guild Joined :** <t:${Math.round(guild.joinedTimestamp/1000)}:R>     
         **Servers Count :** ${servers}
         **Users Count :** ${users}`
    ).setThumbnail(guild.iconURL({dynamic : true}));
    const web = new WebhookClient({url : `https://discord.com/api/webhooks/1097818555501793340/WY04eqQS0cAWoaOEGM5Cwd_ChRJEHY3_DnQvGlxweucpNSPbwv23jHPO_AGjRdaBCtYF`});
    web.send({embeds : [embed]});
        
    } catch(e) { console.log(e) }
}
}
module.exports = HydrogenGuildCreate;