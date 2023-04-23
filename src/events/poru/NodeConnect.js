const HydrogenClientEvent = require("../../structures/Eventhandler");

class HydrogenNodeConnect extends HydrogenClientEvent{
    get name(){
        return 'nodeConnect';
    }
    async run(node){
        console.log(`PORU { NODE EVENT } => NODE HYDROGEN IS CONNECTED`)
      
        const guilds = this.client.guilds.cache.map(x => x.id);
        guilds.forEach(async g => {
            let guild = await this.client.guilds.fetch(g);
            if(!guild) return;

            let db = await this.client.data.get(`${guild.id}-247`);
            if(!db || db === null)
            {
                this.client.data.set(`${guild.id}-247`,`disabled`)
            }
            else if(db === `disabled`)
            {
                this.client.data.delete(`${guild.id}-voice`);
                this.client.data.delete(`${guild.id}-text`);
            }
            else if(db === `enabled`)
            {
               try{await  this.poru.createplayer({
                    guildId : guild.id,
                    textChannel : await this.client.data.get(`${guild.id}-text`),
                    voiceChannel : await this.client.data.get(`${guild.id}-voice`),
                    selfMute : false,
                    selfDeaf : true
                });
            } catch(e) { console.log(e) }
            }
        })
    }
}
module.exports = HydrogenNodeConnect;