const { ShardingManager } = require("discord.js");
const { token } = require(`../config.json`);
const manager = new ShardingManager('src/index.js',{
    totalShards : 2,
    respawn : true,
    token : token
});
manager.on('shardCreate' , shard => {
  console.log(`Shard ${shard.id} spawned`)
})
manager.spawn();

