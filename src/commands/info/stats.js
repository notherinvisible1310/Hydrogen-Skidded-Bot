const HydrogenCommand = require("../../structures/HydrogenCommand");
const moment = require(`moment`);
require(`moment-duration-format`);
const { EmbedBuilder , ButtonBuilder , ButtonStyle , ActionRowBuilder } = require(`discord.js`);
class stats extends HydrogenCommand{
    get name(){
        return 'stats'
    }
    get aliases(){
        return ['st','St','Stats']
    }
    get cat(){
        return 'info'
    }
    async run(client,message,args,prefix){

    const servers = await client.shard.broadcastEval(c => c.guilds.cache.size).then(r => r.reduce((a, b) => a + b, 0))
    const users = await client.shard.broadcastEval(c => c.guilds.cache.filter(x => x.available).reduce((a, g) =>a + g.memberCount, 0)).then(r => r.reduce((acc, memberCount) => acc +   memberCount, 0))
    const allchannels = await client.shard.broadcastEval(c => c.channels.cache.size)
        try{
            let dev = [], cdev = [], supp =[];
            let user = await client.users.fetch(`1081461137343774820`);
            dev.push(`[${user.username}](https://discord.com/users/1081461137343774820)`);
          user = await
client.users.fetch(`881460555389489172`);
            dev.push(`[${user.username}](https://discord.com/users/881460555389489172)`);
            
            const uptimeSeconds = process.uptime();
const timestamp = Math.floor(Date.now() / 1000) - Math.floor(uptimeSeconds);
const timestampString = `${timestamp}`;




        
        let embed = new EmbedBuilder().setColor(client.config.color).setAuthor({name : `| ${client.user.username} Information` , iconURL : client.user.displayAvatarURL()}).setDescription(`**Bot Name:** ${client.user.tag}\n**Bot Id:** ${client.user.id}\n**Library:** [discord.js](https://discord.js.org/#/)\n**Uptime:** <t:${timestampString}:R>\n**Bot Ping:** ${Math.round(client.ws.ping)}ms\n**Default Prefix:** +`)
        .addFields([
            {name: `__Stats__`, value: `**Total Servers:** ${servers}\n**Total Users:** ${users}\n**Shards:** 1`},
        ])
         
        .addFields([
            {name: `__Developers__`, value: dev.join(` , `) }])

            
            
        return message.channel.send({embeds : [embed]});
    } catch(e) { console.error(e) }
    }
}
module.exports = stats;