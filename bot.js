const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg =>  {
	if(msg.author.bot) return;
	if (msg.content === '!Launch') {
	msg.channel.bulkDelete(100)
    msg.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.\n If you are out of teams or require assistance: \n Put an 💩 emoji on your lane.```');
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Ultimus6.png')] });
	msg.channel.send("``` ╔═══════════════╗    ╔═══════════════╗    ╔═══════════════╗ \n ║ Strike Team 1 ║    ║ Strike Team 2 ║    ║ Strike Team 3 ║  \n ╚═══════════════╝    ╚═══════════════╝    ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue           Lane 1 - Blue        Lane 1 - Blue")
	msg.channel.send({embed: {
	color: 3447003,
	description: "Mr Gadd            Random            Random2"
	}});
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send({embed: {
	color: 3447003,
	description: "Bobdillo            x             y"
	}});
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  	
}

if (msg.content === '!delete all') {
	msg.channel.bulkDelete(100)
}
}
);

client.login(process.env.BOT_TOKEN);
