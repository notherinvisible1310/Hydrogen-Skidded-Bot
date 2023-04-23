const HydrogenClientEvent = require("../../structures/Eventhandler");

class HydrogenNodeDisconnect extends HydrogenClientEvent{
    get name(){
        return 'nodeDisconnect';
    }
    async run(node){
        console.log(`PORU { NODE EVENT } => NODE ${node.name} IS DISCONNECTED`);
    }
}
module.exports = HydrogenNodeDisconnect;