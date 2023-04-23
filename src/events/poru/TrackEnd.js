const HydrogenClientEvent = require("../../structures/Eventhandler");

class TrackEnd extends HydrogenClientEvent{
    get name(){
        return 'trackEnd';
    }
    async run(player){
        try{
            player.message.delete()
        } catch(e)
        {
            
        }
    }
}
module.exports = TrackEnd;