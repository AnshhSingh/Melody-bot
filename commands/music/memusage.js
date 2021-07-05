const { send } = require('process');

module.exports = {
  name: 'memusage',

  async run (client,message) {
    var os = require('os');
    message.channel.send(`OS-`+os.platform())
    const i = Math.round(os.totalmem()/1000000000)
const memory = Math.round((os.totalmem()-os.freemem())/1000000000)
message.channel.send('**total ram usage of bot server-**'+memory+'GB out of '+i+'GB');
var oss = require('os-utils');
const up = oss.sysUptime()/3600000;

message.channel.send('Uptime'+up.toFixed(2)+'HOURS');


oss.cpuUsage(function(v){
    message.channel.send('**CPU Usage - **'+v.toFixed(3)+'%');
});
}
}
