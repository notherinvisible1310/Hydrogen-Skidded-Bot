const Hydrogen = require("./structures/HydrogenClient.js");
const { spawn } = require('child_process');
const client = new Hydrogen();
client.on('disconnect', () => {
  spawn('npm', ['start'], {
    detached: true, 
    stdio: 'ignore', 
  }).unref(); 
});
module.exports = client;