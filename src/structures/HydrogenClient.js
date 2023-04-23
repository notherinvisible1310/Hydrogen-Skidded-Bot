const { Client , GatewayIntentBits , Collection , WebhookClient, Partials , EmbedBuilder } = require(`discord.js`);
const { Guilds , MessageContent , GuildInvites , GuildVoiceStates , GuildMessages , DirectMessages } = GatewayIntentBits;
const { User , Channel , Reaction , Message , GuildMember } = Partials;
const { Poru } = require(`poru`);
const { errors } = require(`../../config.json`);
const { Database } = require("quickmongo");
const HydrogenEvents = require("./HydrogenEvents");
const HydrogenCommands = require("./CommandHandler");
const { Spotify } = require("poru-spotify");
const config = require(`../../config.json`);
const web = new WebhookClient({url : errors});
class Hydrogen extends Client {
    constructor(){
        super({
            intents : [Guilds,MessageContent,GuildInvites,GuildMessages,DirectMessages,GuildVoiceStates],
            partials : [Channel,User,Reaction,Message,GuildMember],
            allowedMentions : {
                repliedUser : true,
                parse : ['everyone','roles','users']
            }
        });
        this.poru = new Poru(this,config.nodes,{
            apple : {
                playlistLimit : 5
            },
            plugins : [new Spotify({clientID : config.spotifyID,clientSecret : config.spotifySecret, playlistLimit : 5})],
        });
      this.poru.on("playerDisconnect",async(player) => {player.destroy()});
        this.data = new Database(config.mongourl);
        this.data.connect();
        this.data2 = new Database(config.mongourl2);
        this.data2.connect();
        this.emoji = require(`${process.cwd()}/emoji.json`);
        this.config = require(`${process.cwd()}/config.json`);
        this.HydrogenCommands = new HydrogenCommands(this).loadCommands();
        this.events = new HydrogenEvents(this).loadEvents();
        this.login(this.config.token);
        process.on('unhandledRejection',async(er) => {
            console.error(er);
            web.send({embeds : [new EmbedBuilder().setColor(`#2f3136`).setDescription(`\`\`\`js\n${er}\`\`\``)]});
        });
        process.on('uncaughtException',async(err) => {
            console.error(err);
            web.send({embeds : [new EmbedBuilder().setColor(`#2f3136`).setDescription(`\`\`\`js\n${err}\`\`\``)]});
        });
      process.on("uncaughtExceptionMonitor",async(e) => {
        console.log(e)
      })
    }
    
}
module.exports = Hydrogen;