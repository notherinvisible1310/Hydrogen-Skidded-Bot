const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, SelectMenuBuilder } = require("discord.js");
const HydrogenCommand = require("../../structures/HydrogenCommand");
const { trusted } = require("mongoose");

class Help extends HydrogenCommand{
    get name(){
        return 'help';
    }
    get cat(){
        return 'info'
    }
    async run(client,message,args,prefix){
      
        try{
        let em = new EmbedBuilder().setColor(client.config.color).setAuthor({name : `${client.user.username}`,iconURL : client.user.displayAvatarURL()}).setDescription(`Hydrogen Is A Music Bot With Many Features. You Can Use The \`+help\` To Get Information About Commands`                                                                          
        ).addFields([
            {
                name : `**Command Categories**`,
                value : `> ${client.emoji.music} \`:\` Music \n > ${client.emoji.filters} \`:\` Filters \n> ${client.emoji.settings} \`:\` Settings \n> ${client.emoji.info} \`:\` Information \n> ${client.emoji.allCommands} \`:\` All Commands`
            },

            {
                name: `**Useful Links**`,
                value : `> [Support Server](https://discord.gg/FC7MeKuPec)\n> [Invite Link](https://discord.com/api/oauth2/authorize?client_id=${client.user.userid}&permissions=8&scope=applications.commands%20bot)\n > [Vote Us](https://top.gg)`
            }
        ])
        

            
        
          
        let select = new SelectMenuBuilder().setCustomId(`ok`).setPlaceholder(`${client.user.username} is Love`).addOptions([
            {
                label : `Help Home`,
                emoji : `${client.emoji.home}`,
                value : `ok1`
            },
            {
                label : `Music`,
                emoji : `${client.emoji.music}`,
                value : `ok2`
            },
            {
                label : `Filters`,
                emoji : `${client.emoji.filters}`,
                value : `ok3`
            },
            {
                label : `Information`,
                emoji : `${client.emoji.info}`,
                value : `ok4`
            },
            {
                label : `Settings`,
                emoji : `${client.emoji.settings}`,
                value : `ok5`
            },
            {
                label : `All Commands`,
                emoji : `${client.emoji.allCommands}`,
                value : `ok6`
            },
        ]);
        let ro2 = new ActionRowBuilder().addComponents(select);

        let em1 = new EmbedBuilder().setColor(client.config.color).addFields({name : ` __Music Commands__ `, value: `> ** \`Clear Queue\` -** Clears The Ongoing Queue\n > ** \`Connect\` -** Make The Bot Join Your Voice Channel \n > ** \`Disconnect\` -** Makes The Bot Leave Your Voice Channel \n > ** \`Loop\` -** Enable Loop \n > ** \`Pause\` -** Pause The Ongoing Music \n > ** \`Play\` -** Play The Given Music /Playlist Url \n > ** \`Previous\` -**Makes The Bot Play Previous Music If Available\n > ** \`Queue\` -**Give The Information About The Ongoing Queue \n > ** \`Remove\` -**Remove The Song From The Queue\n > ** \`Restart\` -**Restart The Music \n > ** \`Resume\` -**Resume The Music \n > ** \`Shuffle\` -**Shuffle's The Music In Queue \n > ** \`Skip\` -**Skip's To The Next Song \n > ** \`Stop\` -** Stop's The Ongoing Music \n > ** \`Volume\` -**Set's The Given Volume As Player Volume` });
        let em2 = new EmbedBuilder().setColor(client.config.color).addFields({name : ` __Filter Commands__`,value: `> ** \`8D\` -**Enables 8D Filter\n > ** \`BassBoost\` -** Enables BassBoost Filter \n > ** \`Karaoke\` -** Enables Karaoke Filter \n > ** \`Nightcore\` -** Enables Nightcore Filter \n > ** \`Rotation\` -** Enables Rotation Filter \n > ** \`Tremolo\` -** Enables Tremolo Filter \n > ** \`Vaporwave\` -**Enables Vaporwave Filter\n > ** \`Vibrato\` -**Enables Vibrato Filter \n > ** \`Settings\` -**To View The Settings Of Filters In Guild\n > ** \`ClearFilters\` -**Clear All The Filters Which Are Enabled`});
        let em3 = new EmbedBuilder().setColor(client.config.color).addFields({name : `__Information Commands__ `,value : `> ** \`Help\` -** Sends The Bot Help Menu\n > ** \`Ping\` -** Sends The Bot Ping \n > ** \`Stats\` -** Sends Bot Stats \n > ** \`Support\` -** Sends Bot Support Server Link \n > ** \`Uptime\` -** Sends The Bot Uptime \n > ** \`Vote\` -** Sends The Bot Voting Page Link`});
        let em4 = new EmbedBuilder().setColor(client.config.color).addFields({name : `__Settings Commands__ `,value : `> ** \`247\` -** Turn On The 24/7 Mode Of The Bot\n > ** \`Autoplay\` -** Turns On The Bots Autoplay Mode \n > ** \`Prefix\` -** Sets The Bot Prefix To The Given Prefix`});
        let em5 = new EmbedBuilder().setColor(client.config.color).addFields([
            {
                name : `__Music Commands__ `,value: `> ** \`Clear Queue\` -** Clears The Ongoing Queue\n > ** \`Connect\` -** Make The Bot Join Your Voice Channel \n > ** \`Disconnect\` -** Makes The Bot Leave Your Voice Channel \n > ** \`Loop\` -** Enable Loop \n > ** \`Pause\` -** Pause The Ongoing Music \n > ** \`Play\` -** Play The Given Music /Playlist Url \n > ** \`Previous\` -**Makes The Bot Play Previous Music If Available\n > ** \`Queue\` -**Give The Information About The Ongoing Queue \n > ** \`Remove\` -**Remove The Song From The Queue\n > ** \`Restart\` -**Restart The Music \n > ** \`Resume\` -**Resume The Music \n > ** \`Shuffle\` -**Shuffle's The Music In Queue \n > ** \`Skip\` -**Skip's To The Next Song \n > ** \`Stop\` -** Stop's The Ongoing Music \n > ** \`Volume\` -**Set's The Given Volume As Player Volume`
            },
            {
               name: ` __Filter Commands__`,value: `> ** \`8D\` -**Enables 8D Filter\n > ** \`BassBoost\` -** Enables BassBoost Filter \n > ** \`Karaoke\` -** Enables Karaoke Filter \n > ** \`Nightcore\` -** Enables Nightcore Filter \n > ** \`Rotation\` -** Enables Rotation Filter \n > ** \`Tremolo\` -** Enables Tremolo Filter \n > ** \`Vaporwave\` -**Enables Vaporwave Filter\n > ** \`Vibrato\` -**Enables Vibrato Filter \n > ** \`Settings\` -**To View The Settings Of Filters In Guild\n > ** \`ClearFilters\` -**Clear All The Filters Which Are Enabled`
            },
            {
                name : `__Information Commands__ `,value : `> ** \`Help\` -** Sends The Bot Help Menu\n > ** \`Ping\` -** Sends The Bot Ping \n > ** \`Stats\` -** Sends Bot Stats \n > ** \`Support\` -** Sends Bot Support Server Link \n > ** \`Uptime\` -** Sends The Bot Uptime \n > ** \`Vote\` -** Sends The Bot Voting Page Link`
            },
            {
                name : `__Settings Commands__ `,value : `> ** \`247\` -** Turn On The 24/7 Mode Of The Bot\n > ** \`Autoplay\` -** Turns On The Bots Autoplay Mode \n > ** \`Prefix\` -** Sets The Bot Prefix To The Given Prefix`
            }
        ])


        let msg = await message.channel.send({embeds : [em],components : [ro2]});
        let call = await msg.createMessageComponentCollector({
            filter:(o) =>{
                if(o.user.id === message.author.id) return true;
                else{
                    return o.reply({content : `${client.emoji.cross} | This is not your session run ${prefix}help instead.`,ephemeral : true})
                }
            },
            time : 50000,
        });
        call.on('collect',async(int) => {
            if(int.isButton())
            {
                if(int.customId === `m1`)
                {
                    return int.update({embeds : [em1]});
                }
                if(int.customId === `m2`)
                {
                    return int.update({embeds : [em2]});
                }
                if(int.customId === `m3`)
                {
                    return int.update({embeds : [em3]});
                }
                if(int.customId === `m4`)
                {
                    return int.update({embeds : [em4]});
                }
                if(int.customId === `m5`)
                {
                    return int.update({embeds : [em5]});
                }
            }
            if(int.isSelectMenu())
            {
                for(const value of int.values)
                {
                    if(value === `ok1`)
                    {
                        return int.update({embeds : [em]});
                    }
                    if(value === `ok2`)
                    {
                        return int.update({embeds : [em1]});
                    }
                    if(value === `ok3`)
                    {
                        return int.update({embeds : [em2]});
                    }
                    if(value === `ok4`)
                    {
                        return int.update({embeds : [em3]});
                    }
                    if(value === `ok5`)
                    {
                        return int.update({embeds : [em4]});
                    }
                    if(value === `ok6`)
                    {
                        return int.update({embeds : [em5]});
                    }
                    
                }
            }
        });
         
        let moduledisabled = new ActionRowBuilder().addComponents(
             new SelectMenuBuilder().setCustomId(`ok`).setPlaceholder(`${client.user.username} is Love`).setDisabled(true).addOptions([
                {
                    label : `Help Home`,
                    emoji : `${client.emoji.home}`,
                    value : `ok1`
                },
                {
                    label : `Music`,
                    emoji : `${client.emoji.music}`,
                    value : `ok2`
                },
                {
                    label : `Filters`,
                    emoji : `${client.emoji.filters}`,
                    value : `ok3`
                },
                {
                    label : `Settings`,
                    emoji : `${client.emoji.settings}`,
                    value : `ok4`
                },
                {
                    label : `Information`,
                    emoji : `${client.emoji.info}`,
                    value : `ok5`
                },
                {
                    label : `All Commands`,
                    emoji : `${client.emoji.allCommands}`,
                    value : `ok6`
                },
            ])
            );
        
        call.on('end',async() => {
            if(!msg) return;
            else
            msg.edit({embeds : [em],components : [moduledisabled]})
        });
    } catch(e) { console.log(e) }
} 
}
module.exports = Help