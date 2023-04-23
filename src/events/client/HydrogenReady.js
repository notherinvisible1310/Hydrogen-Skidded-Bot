const { ActivityType } = require("discord.js");
const HydrogenClientEvent = require("../../structures/Eventhandler");
class HydrogenReady extends HydrogenClientEvent{
    get name(){
        return 'ready';
    }
    async run(){
        console.log(`${this.client.user.username} is Online!`);
        this.client.poru.init(this.client);
        let statuses = [`${this.client.config.prefix}help`,`${this.client.config.prefix}play`]
        setInterval(() => {
            let status = statuses[Math.floor(Math.random()*statuses.length)];		
              this.client.user.setPresence({
                  activities: [
                      {
                          name: status,
                          type: ActivityType.Listening
                      }
                  ],
                  status: "online"
              });
          }, 1000);

    }
}
module.exports = HydrogenReady;