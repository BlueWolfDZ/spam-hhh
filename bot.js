const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', async() => {
      var server = "605409089748729865"; // ايدي السررفر
      var channel = "610912007104888836";//ايدي الروم
          setInterval(()=>{
          client.guilds.get(server).channels.get(channel).send('كسمك')
          },305);

    });


client.login(process.env.BOT_TOKEN);
