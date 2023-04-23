const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js");
const HydrogenClientEvent = require(`../../structures/Eventhandler`);
const ms = require(`ms`);

class TrackStart extends HydrogenClientEvent{
    get name(){
        return 'trackStart'
    }

    async run(player,track){
        let emb = new EmbedBuilder()
            .setColor(this.client.config.color)
            .setDescription(`[${track.info.title}](https://discord.gg/FC7MeKuPec)`)
            .addFields([
                {name: `${this.client.emoji.author} __Author__`, value: `${track.info.author}`, inline: true},
                {name: `${this.client.emoji.time} __Duration__`, value: `${ms(track.info.length)}`, inline: true}
            ])
            .setAuthor({name: `| Now Playing`, iconURL: this.client.user.displayAvatarURL()});

        // Get autoplay status from database
        let autoplay = await this.client.data.get(`${player.guild}-${player.voiceChannel.id}-autoPlay`);

        // Check autoplay status
        if (autoplay === 'enabled') {
            // If autoplay is enabled, show bot as requester
            emb.addFields([{name: `${this.client.emoji.users} __Requester__`, value: `[${this.client.user}]`, inline: true}]);
        } else {
            // If autoplay is disabled, show user as requester
            emb.addFields([{name: `${this.client.emoji.users} __Requester__`, value: `[${track.info.requester}]`, inline: true}]);
        }

        const channel = this.client.channels.cache.get(player.textChannel);
        let but1 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Stop`).setCustomId(`pl1`);
        let but2 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Pause`).setCustomId(`pl2`);
        let but3 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Loop`).setCustomId(`pl3`);
        let but4 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Previous`).setCustomId(`pl4`);
        let but5 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Skip`).setCustomId(`pl5`);
        let but6 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Vol-`).setCustomId(`pl6`);
        let but7 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Shuffle`).setCustomId(`pl7`);
        let but8 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setEmoji(this.client.emoji.avon).setCustomId(`pl8`).setDisabled(true);
        let but9 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Repeat`).setCustomId(`pl9`);
        let but10 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Vol+`).setCustomId(`pl10`);
        let ro = new ActionRowBuilder().addComponents(but1, but2, but3, but4, but5);
        if(channel){
            return channel?.send({embeds: [emb], components: [ro]}).then(x => player.message = x);
        }
    }
}

module.exports = TrackStart;
