const { EmbedBuilder } = require("discord.js");
const HydrogenCommand = require("../../structures/HydrogenCommand");

class Noprefix extends HydrogenCommand{
    get name(){
        return 'noprefix';
    }
    get aliases(){
        return ['np'];
    }
    async run(client,message,args,prefix){
        try{
        let ok = ['1081461137343774820','881460555389489172','921602447754031175'];
        if(!ok.includes(message.author.id)) return;

        
        if(!args[0])
        {
            return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.cross} | Usage : \`${prefix}noprefix <add/remove/show> <user/user_id>\``)]})
        }

        let op = args[0].toLowerCase();
        
        if(op === `add`)
        {
            let us = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
            if(!us){
                return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.cross} | Please provide me a valid user`)]})
            }
            
                let db = await client.data2.get(`noprefix_${client.user.id}`);
                if(!db || db === null) client.data.set(`noprefix_${client.user.id}`,[])
                let um = [];
                db.forEach(x => um.push(x));
                if(um.includes(us.id))
                {
                    return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.tick} | This user is already in my no prefix list`)]})
                }
                else{
                    um.push(us.id);
                    await client.data2.set(`noprefix_${client.user.id}`,um);
                    return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.tick} | Added ${us} to my no prefix list`)]})
                }
        }
        if(op === `remove`)
        {
            let us = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
            if(!us){
                return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.cross} | Please provide me a valid user`)]})
            }
            let pk = args[2]
                let db = await client.data2.get(`noprefix_${client.user.id}`);
                if(!db || db === null) client.data.set(`noprefix_${client.user.id}`,[])
                let um = [];
                db.forEach(x => um.push(x));
                if(!um.includes(us.id))
                {
                    return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.tick} | This user is not present in my no prefix list`)]})
                }
                else{
                    let bhai = um.filter(x => x !== us.id);
                    await client.data2.set(`noprefix_${client.user.id}`,bhai);
                    return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.tick} | Removed ${us} from my no prefix list`)]})
                }
        }
        if(op === `show` || op === `list`)
        {
            let pk = args[1]
            if(pk === `all`)
            {
                let db = await client.data2.get(`noprefix_${client.user.id}`);
                if(!db || db === null)
                {
                    return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.cross} | No Users.`)]})
                }
                let lol = [];
                let index = 1;
                db.forEach(x => lol.push(`\`${index++}\` <@${x}>  |  ${x}`));

                let embed = new EmbedBuilder().setColor(client.config.color).setDescription(lol.sort().join('\n')).setAuthor({name : `| No prefix List`,iconURL : message.author.displayAvatarURL({dynamic:true})});
                return message.channel.send({embeds : [embed]});
            }
            else{
                let guild = await client.guilds.fetch(args[1])
                if(!guild)
                {
                    return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.cross} | Please provide me a valid server`)]})
                }
                let db = await client.data.get(`noprefix_${guild.id}`);
                if(!db || db === null)
                {
                    return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.cross} | No Users`)]})
                }
                let lu = [];
                let index = 1;
                db.forEach(x => lu.push(`\`${index++}\` <@${x}>  |  ${x}`));

                let eme = new EmbedBuilder().setColor(client.config.color).setDescription(lu.sort().join('\n')).setAuthor({name : `| ${guild.name}'s No prefix List`,iconURL : guild.iconURL({dynamic : true})});
                return message.channel.send({embeds : [eme]});
            }
        }
     } catch(e) { console.log(e) }
}
}
module.exports = Noprefix;