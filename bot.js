const Discord = require('discord.js');
const client = new Discord.Client();
// const config = require('./config.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg =>  {
	if(msg.author.bot) return;
	if (msg.content === '!raid ultimus 6') {
	msg.channel.bulkDelete(100)
    msg.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Ultimus6.png')] });
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  	
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  		
}

	if (msg.content === '!raid ultimus 7') {
	msg.channel.bulkDelete(100)
    msg.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Ultimus7.png')] });
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  	
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  		
}

	if (msg.content === '!raid alpha 4')	
	{
		if (msg.channel.id === '599420098490400768' || msg.channel.id === '599420244016103425') {
        // Deal with command
	msg.channel.bulkDelete(100)
    msg.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Alpha4.png')] });
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  	
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  		
}
}

	if (msg.content === '!raid beta 4') {
	msg.channel.bulkDelete(100)
    msg.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Beta4.png')] });
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  	
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  		
}

	if (msg.content === '!raid gamma 4') {
	msg.channel.bulkDelete(100)
    msg.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Gamma4.png')] });
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  	
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  		
}

//EVENTS
	if (msg.content === '!furyevent') {
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/furyevent.png')] });	
}
	if (msg.content === '!ironmanevent') {
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/ironmanevent.png')] });	
}

	if (msg.content === '!magnetoevent') {
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/magnetoevent.png')] });	
}

	if (msg.content === '!shurievent') {
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/shurievent.png')] });
}

	if (msg.content === '!starlordevent') {
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/starlordevent.png')] });  		
}

//UNIQUE GEAR
	if (msg.content === '!uniques') {
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/ironmanevent.png')] });
}

if (msg.content === '!delete all') {
	msg.channel.bulkDelete(100)
}
}
);

client.login(process.env.TOKEN);
