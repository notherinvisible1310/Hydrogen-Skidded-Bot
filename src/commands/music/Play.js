const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js");
const HydrogenCommand = require(`../../structures/HydrogenCommand`);

class Play extends HydrogenCommand {
    get name() {
        return 'play'
    }
    get aliases() {
        return ['Play']
    }
    get cat() {
        return 'music'
    }
    get inVoice() {
        return true;
    }
    get sameVoice() {
        return true;
    }

    async run(client, message, args, prefix) {
        try {
            if (!args[0]) {
                return message.channel.send({embeds: [new EmbedBuilder().setColor(client.config.color).setDescription(`__**Command Usage**__ \n \`\`\`js\n${prefix}play <song>\`\`\``)]});
            }

            const channel = message.member.voice.channel;
            let player = client.poru.players.get(message.guild.id);

            if (!player) {
                player = await client.poru.createPlayer({
                    guildId: message.guild.id,
                    textChannel: message.channel.id,
                    voiceChannel: channel.id,
                    selfDeaf: true,
                    selfMute: false,
                });
            }

            player.setTextChannel(message.channel.id);
            const search = args.join(" ");
            const resolve = await client.poru.resolve(search);
            const { playlistInfo, tracks, loadType } = resolve;

            if (loadType === `PLAYLIST_LOADED`) {
                for (const track of tracks) {
                    track.info.requester = message.author;
                    player.queue.add(track);
                }

                if (player.queue.length > 0) {
                    if (!player.isPaused && !player.isPlaying) {
                        player.play();
                    }

                    return message.channel.send({embeds: [new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.queue} **Added** \`${resolve.tracks.length}\` **Songs From** *${playlistInfo.name}* \n **Requester** : ${message.author}`).setAuthor({name: `| Added Playlist To Queue`, iconURL: message.author.displayAvatarURL({dynamic: true})})]});
                }
            } else if (loadType === `SEARCH_RESULT` || loadType === `TRACK_LOADED`) {
                const track = tracks.shift();
                track.info.requester = message.author;
                player.queue.add(track);

                if (!player.isPaused && !player.isPlaying) {
                    player.play();
                }

                
                return message.channel.send({embeds: [new EmbedBuilder().setColor(client.config.color).setDescription(`${client.emoji.queue} [${track.info.title}](https://discord.gg/FC7MeKuPec) \n **Requester** : ${message.author}`).setAuthor({name: `| Added Song to Queue`, iconURL: message.author.displayAvatarURL({dynamic: true})})], components: []});
            } else {
                const no = new EmbedBuilder().setColor(client.config.color).setAuthor({name: `| No Results found for the given query`, iconURL: message.guild.iconURL({dynamic: true})});
                return message.channel.send({embeds: [no]});
            }
        } catch (error) {
           
            return message.channel.send({embeds: [new EmbedBuilder().setColor(client.config.color).setDescription(`An Error Has Occured Please Visit Our Support Server`)]})
        }
    }
}
    
    module.exports = Play;
    