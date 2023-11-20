require("dotenv").config();
const insulter = require('insult');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
PREFIX = '$';
console.log('HELLO WORLD');

client.on('ready' , (   )=>{
    console.log('has logged in. ' );
});


client.on('message', (msg) =>{
    const discordIds = []
    // console.log(msg.content);
  if(msg.author.bot) return;
  if(msg.content.startsWith(PREFIX)){
      const [CMD_NAME, ...args] = msg.content.trim().substring(PREFIX.length).split(/\s+/);
if(msg.author.id === discordIds[0]){
msg.reply('<@' + msg.author.id+ '> ' + 'Bs ya sardenah');
}else if(msg.author.id === discordIds[1]){
  msg.reply('<@' + msg.author.id+ '> ' + '2r3t enta ya 7bb');
  }else if (msg.author.id === discordIds[2]){
    msg.reply('<@' + msg.author.id+ '> ' + 'Agmad tank maloosh feha');
  }
    else if(CMD_NAME === 'insult'  && args.length == 0){
   msg.reply(  '<@' + msg.author.id+ '> '+ insulter.Insult());
    }
    else if(args.length != 0){
    msg.reply('<@' + msg.mentions.users.first().id + '> ' + insulter.Insult());
    }

  }

});
 client.login(process.env.TOKEN);
