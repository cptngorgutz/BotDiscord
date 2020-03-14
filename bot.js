const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

//USERS JOINING & LEAVING
client.on('guildMemberAdd', function(member)
{
let memberRole = member.guild.roles.find(role => role.name === 'recruit');
member.addRole(memberRole);
member.guild.channels.get('551566689620197376').send(`Welcome to The Beyonders! ${member}. \nOne of the captains will be with you shortly. \nWe hope you enjoy your stay here. \nPlease post a profile picture in the <#630780029013458954> channel. Thankyou.`);
//NEW USERS JOIN
member.guild.channels.get('428968153800900608').send({embed: {
color: 0x00ff00, 
title: "**MEMBER JOINED! ** ",
description: member + " has joined **The Beyonders ** discord server!",
author: "Member Joined",
thumbnail: { url: member.user.displayAvatarURL },
fields: [{
name: member.user.username + "#" + member.user.discriminator,   
value: "ID# " + member.id + "",
}
],
timestamp: new Date(),
footer: {
}
}})
});	 
client.on('guildMemberRemove', function(member)
{
member.guild.channels.get('428968153800900608').send({embed: {
color: 0xff0000,
title: "**MEMBER LEFT! ** ",
description: member + " has left **The Beyonders ** discord server!",
author: "Member Left",
thumbnail: { url: member.user.displayAvatarURL },
fields: [{
name: member.user.username + "#" + member.user.discriminator,   
value: "ID# " + member.id + "",
}
],
timestamp: new Date(),
footer: {
}
}}); });	

//POLLS 
client.on('message', message =>{
let args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
	switch(args[0]){
		
		case "poll1":
			if(!args[1]){
			break;
			}
			
			let msgArgs = args.slice(1).join(" ");
			message.channel.bulkDelete(1)
			message.channel.send(msgArgs).then(messageReaction => {
			messageReaction.react("👍");
			});
			
		break;
		case "poll2":	
			if(!args[1]){
				break;
			}
			let msgArgs1 = args.slice(1).join(" ");
			message.channel.bulkDelete(1)
			message.channel.send(msgArgs1).then(async messageReaction => {
				await messageReaction.react("👍");
				await messageReaction.react("👎");

			});	
		break;
		case "poll3":		
			if(!args[1]){
				break;
			}
			let msgArgs2 = args.slice(1).join(" ");
			message.channel.bulkDelete(1).catch(O_o=>{}); 
			message.channel.send(msgArgs2).then(async messageReaction => {
				await messageReaction.react("1️⃣");
				await messageReaction.react("2️⃣");
				await messageReaction.react("3️⃣");

			});	
		break;
		case "poll4":		
			if(!args[1]){
				break;
			}
			let msgArgs3 = args.slice(1).join(" ");
			message.channel.bulkDelete(1)
			message.channel.send(msgArgs3).then(async messageReaction => {
				await messageReaction.react("1️⃣");
				await messageReaction.react("2️⃣");
				await messageReaction.react("3️⃣"); 
				await messageReaction.react("4️⃣"); 
			});	
		break;
	}
	let command = args.shift().toLowerCase();
	if(command === 'poll') {
	let Embed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle("Initiate Poll")
	.setDescription("!poll1 to launch a 1 responce poll 👍 \n!poll2 to launch a 2 responce poll 👍,👎 \n!poll3 to launch a 3 responce poll 1️⃣,2️⃣,3️⃣\n!poll4 to launch a 4 responce poll 1️⃣,2️⃣,3️⃣,4️⃣");	
	message.channel.send(Embed);
}
});

//AWAY NOTES
client.on("message", async message => {
if(message.content.startsWith('!away')) {
const awaynoteschannel = client.channels.get('600465818014449674')
const messages1 = await message.channel.fetchMessages({ limit: 1 });
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const TB1 = message.guild.roles.find(role => role.name === 'TB1');
const TB2 = message.guild.roles.find(role => role.name === 'TB2');
const TB3 = message.guild.roles.find(role => role.name === 'TB3');
message.channel.bulkDelete(1)
if (message.member.roles.find(role => role.name === 'TB1')) {
embed.setColor('#0099ff')
embed.setDescription("**The Beyonders \n**"  + message.author + " " + Text)
embed.setTimestamp()
awaynoteschannel.send(embed);
message.channel.send("Away-note Received.");
}
if (message.member.roles.find(role => role.name === 'TB2')) {
embed.setColor('#0099ff')
embed.setDescription("**The Beyonders II \n**" + message.author + " " + Text)
embed.setTimestamp()
awaynoteschannel.send(embed);
message.channel.send("Away-note Received.");
}
if (message.member.roles.find(role => role.name === 'TB3')) {
embed.setColor('#0099ff')
embed.setDescription("**The Beyonders III \n**" + message.author + " " + Text)
embed.setTimestamp()
awaynoteschannel.send(embed);
message.channel.send("Away-note Received.");
}

}
});

//MISC COMMANDS        Character tiers, events etc.
client.on("message", async message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const mentionedUser = message.mentions.members.first();
const recruit = message.guild.roles.find(role => role.name === 'recruit');
const TB1 = message.guild.roles.find(role => role.name === 'TB1');
const TB2 = message.guild.roles.find(role => role.name === 'TB2');
const TB3 = message.guild.roles.find(role => role.name === 'TB3');
const TB1cap = message.guild.roles.find(role => role.name === 'TB1 Captain');
const TB2cap = message.guild.roles.find(role => role.name === 'TB2 Captain');
const TB3cap = message.guild.roles.find(role => role.name === 'TB3 Captain');
//                       TB1team1             TB1team2            TB1team3              TB2team1             TB2team2            TB2team3             TB3team1              TB3team2             TB3team3
const rolelist = [ '431511357540532244','431511377824448512','431511398057771029','486675509166735371','486675593522446346','486675606021341204','643129349926682635','643129351549878295','643129353873391657',]
const cap = [ '428987109391728651', '433659992516591617', '643130277161336875', ] //CAPTAIN ROLES 1/2/3
if(command === 'blitz') {
if(message.channel.id === '428968670908383242'){
	const channelToCheck = client.channels.get('599409850031669267')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
	//message.channel.send(lastMessage.url)
    }).catch(err => {
    console.error(err)
    })
}
}
if(command === 'blitz2') {
if(message.channel.id === '428968670908383242'){
    const channelToCheck = client.channels.get('663350094309097472')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
	//message.channel.send(lastMessage.url)
    }).catch(err => {
    console.error(err)
    })
}
}
if(command === 'uniques') {
    const channelToCheck = client.channels.get('662765504041058320')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
    }).catch(err => {
    console.error(err)
    })
}
if(command === 'notifications') { //SELF ASSIGNED ROLES
message.channel.bulkDelete(1)
const notify = message.guild.roles.find(r => r.name === "notifications");
if(message.member.roles.has(notify.id)) {
message.channel.send("" + message.author + " Left Notifications");
message.member.removeRole(notify).catch(console.error);
} else {
message.member.addRole(notify).catch(console.error);
message.channel.send("" + message.author + " Joined Notifications");
}
}
if(command === 'admincommands') {
const TB1captains = message.guild.roles.find(role => role.name === 'TB1 Captain');
const TB2captains = message.guild.roles.find(role => role.name === 'TB2 Captain');
const TB3captains = message.guild.roles.find(role => role.name === 'TB3 Captain');
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Admin Commands List** \n \n**RAIDS:** \n**!u6/u7/a4/b4/g4** \n(Only works in raid chat) \nPings @ everyone \n[chosenraid] launched \n \n**!raid** \n**ultimus 6/7 or** \n**alpha/beta/gamma 4**\n(Only works in claim channels) \nSends new claims for [chosenraid] \n\n**!refresh** \n**alpha/beta/gamma 4** \n(Only works in event/greek channels) \nSlowly deletes old claims and sends out new raid claims for [chosenraid] (takes approx 8 minutes) \n \n**PURGE MESSAGES:** \n**!purge #** \n# being number of lines to delete. \n \n**GIVING ROLES:** \n**!give rolename @mentioned user**\nexample, !give tb1 @username. Current addable roles, tb1,tb2,tb3. \n(command will remove recruit role automatically)")
	.setThumbnail('https://i.imgur.com/9eCZztr.png') 
	message.channel.send(exampleEmbed);
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(command === 'commands') {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Commands List** \n \n**Add away note**\n**!away (reason for being away)** \n*(Removes away message for privacy and informs captains of your circumstances)* \n \n**Uniques** \n**!uniques** \n(Infographic showing uniques list) \n \n**Blitz Predictions** \n**!blitz** \n(Shows current blitz predictions, !blitz2 for orb assault blitz) \n \n**Legendary Events** \n**!event** \nDisplays a list of legendary events with commands* \n \n**Character Infographic** \n**![charactername]** \nProvides an infographic of gear needed for chosen character.")
	message.channel.send(exampleEmbed);
}
if(command === "purge") { //PURGE MESSAGES
const TB1captains = message.guild.roles.find(role => role.name === 'TB1 Captain');
const TB2captains = message.guild.roles.find(role => role.name === 'TB2 Captain');
const TB3captains = message.guild.roles.find(role => role.name === 'TB3 Captain');
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {

    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
} else {
	message.channel.send("Sorry, you do not have permission to delete messages.")
}
}
if(command === 'give') {
if(message.member.roles.has(TB1cap.id) || message.member.roles.has(TB2cap.id) || message.member.roles.has(TB3cap.id)) {
if (args[0] === "tb1") { 
//GIVING TB1
if(mentionedUser.roles.has(TB2.id)) { //GIVE TB1 REMOVE TB2
mentionedUser.removeRoles(rolelist).catch(console.error);
mentionedUser.removeRole(TB2).catch(console.error);
mentionedUser.addRole(TB1).catch(console.error);
message.channel.send("TB2 Removed from " + mentionedUser + " + TB1 Added.")
} else if(mentionedUser.roles.has(TB3.id)) { //GIVE TB1 REMOVE TB3
mentionedUser.removeRoles(rolelist).catch(console.error);
mentionedUser.removeRole(TB3).catch(console.error);
mentionedUser.addRole(TB1).catch(console.error);
message.channel.send("TB3 Removed from " + mentionedUser + " + TB1 Added.")
} else if(mentionedUser.roles.has(TB1.id)) { // GIVE TB1 WHILST HAVING TB1
message.channel.send("" + mentionedUser + " Is already in TB1")
} else if(mentionedUser.roles.has(recruit.id)) { // GIVE TB1 WHILST HAVING RECRUIT ROLE
mentionedUser.addRole(TB1).catch(console.error);
message.channel.send("You've just added " + mentionedUser + " to the TB1 family ❤️")
mentionedUser.removeRole(recruit).catch(console.error);
} else {
message.channel.send("Error: mentionedUser does not have a role of recruit/TB1/TB2/TB3.")
}
}
if (args[0] === "tb2") { 
if(mentionedUser.roles.has(TB1.id)) { //GIVE TB2 REMOVE TB1
mentionedUser.removeRoles(rolelist).catch(console.error);
mentionedUser.addRole(TB2).catch(console.error);
message.channel.send("TB1 Removed from " + mentionedUser + " + TB2 Added.")
mentionedUser.removeRole(TB1).catch(console.error);
} else if (mentionedUser.roles.has(TB3.id)) { //GIVE TB2 REMOVE TB3
mentionedUser.removeRoles(rolelist).catch(console.error);
mentionedUser.addRole(TB2).catch(console.error);
message.channel.send("TB3 Removed from " + mentionedUser + " + TB2 Added.")
mentionedUser.removeRole(TB3).catch(console.error);
} else if(mentionedUser.roles.has(TB2.id)) { // GIVE TB2 WHILST HAVING TB2
message.channel.send("" + mentionedUser + " Is already in TB2")
} else if(mentionedUser.roles.has(recruit.id)) { // GIVE TB2 WHILST HAVING RECRUIT ROLE
mentionedUser.addRole(TB2).catch(console.error);
message.channel.send("You've just added " + mentionedUser + " to the TB2 family ❤️")
mentionedUser.removeRole(recruit).catch(console.error);
} else {
message.channel.send("Error: mentionedUser does not have a role of recruit/TB1/TB2/TB3.")
}
}
if (args[0] === "tb3") {
if(mentionedUser.roles.has(TB2.id)) { //GIVE TB3 REMOVE TB2
mentionedUser.removeRoles(rolelist).catch(console.error);
mentionedUser.addRole(TB3).catch(console.error);
message.channel.send("TB2 Removed from " + mentionedUser + " + TB3 Added.")
mentionedUser.removeRole(TB2).catch(console.error);
} else if(mentionedUser.roles.has(TB1.id)) { //GIVE TB3 REMOVE TB1
mentionedUser.removeRoles(rolelist).catch(console.error);
mentionedUser.addRole(TB3).catch(console.error);
message.channel.send("TB1 Removed from " + mentionedUser + " + TB3 Added.")
mentionedUser.removeRole(TB1).catch(console.error);
} else if(mentionedUser.roles.has(recruit.id)) { // GIVE TB3 WHILST HAVING RECRUIT ROLE
mentionedUser.addRole(TB3).catch(console.error);
message.channel.send("You've just added " + mentionedUser + " to the TB3 family ❤️")
mentionedUser.removeRole(recruit).catch(console.error);
} else {
message.channel.send("Error: mentionedUser does not have a role of recruit/TB1/TB2/TB3.")
}
}
} else {
message.channel.send("You dont have permission to use this command.")
}
}


//LEGENDARY EVENTS
if(command === 'event'|| command === 'events' || command === 'legendary' || command === 'legendaries') {
if(args[0] === "blackbolt" || args[0] === "bb" || args[0] === "blackagar" && args[1] === "boltagon" || args[0] === "black" && args[1] === "bolt"){
	const channelToCheck = client.channels.get('688002560640155712')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
    }).catch(err => {
    console.error(err)
    })
} else if(args[0] === "fury" || args[0] === "nick" && args[1] === "fury"){
	const channelToCheck = client.channels.get('688002478649901056')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
    }).catch(err => {
    console.error(err)
    })
} else if(args[0] === "ironman" || args[0] === "iron" && args[1] === "man" || args[0] === "im"){
	const channelToCheck = client.channels.get('688002514792349797')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
    }).catch(err => {
    console.error(err)
    })
} else if(args[0] === "magneto" || args[0] === "mag"){
	const channelToCheck = client.channels.get('688002528792674352')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
    }).catch(err => {
    console.error(err)
    })
} else if(args[0] === "shuri"){
	const channelToCheck = client.channels.get('688002969987317780')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
    }).catch(err => {
    console.error(err)
    })
} else if(args[0] === "starlord" || args[0] === "star" && args[1] === "lord" || args[0] === "sl"){
	const channelToCheck = client.channels.get('688002652612853799')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
    }).catch(err => {
    console.error(err)
    })
} else if(args[0] === "phoenix" || args[0] === "ph"){
	const channelToCheck = client.channels.get('688002661244600331')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
    }).catch(err => {
    console.error(err)
    }) 
} else if(args[0] === "iw" || args[0] === "i" && args[1] === "w" || args[0] === "invisible" && args[1] === "woman" || args[0] === "invisiblewoman" || args[0] === "sue" && args[1] === "storm"){
	const channelToCheck = client.channels.get('688002544865378304')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
    }).catch(err => {
    console.error(err)
    }) 
} else {
const eventEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Legendary Events:** \n**!event name** or\n **!legendary charactername** \n \n**Availible characters:** \nFury\nIron Man,\nMagneto,\nShuri,\nStarlord,\nPhoenix,\nInvisible Woman")
.setThumbnail('https://i.imgur.com/9eCZztr.png') 
message.channel.send(eventEmbed);
}
}

//-------------CHARACTER TIERS
if(command === 'ultron') {
message.channel.bulkDelete(1)
message.channel.send({ files:[('.C:\Users\User\discord-greeter-bot', './Character Tiers/Ultron.png')] });
}
if(command === 'juggernaut') {
message.channel.bulkDelete(1)
message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/Juggernaut.png')] });
}
if(command === 'phoenix') {
message.channel.bulkDelete(1)
message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/Phoenix.png')] });
}
if(command === 'magneto') {
message.channel.bulkDelete(1)
message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/Magneto.png')] });
}
if(command === 'pyro') {
message.channel.bulkDelete(1)
message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/Pyro.png')] });
}
if(command === 'starlord') {
message.channel.bulkDelete(1)
message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/Starlord.png')] });
}
if(command === 'minnerva') {
message.channel.bulkDelete(1)
message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/MinnErva.png')] });
}


//MEMES
if(command === 'vaystfu') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setImage('https://i.imgur.com/tVcDb5u.gif') 
	message.channel.send(exampleEmbed);
}
if(command === 'sad') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription('**You made Cap cry with your bad luck**')
	.attachFiles(['./Misc/sadgif.gif'])
	.setImage('attachment://sadgif.gif')
	message.channel.send(exampleEmbed);
}
if(command === 'happy') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription('**Cap appreciates your luck**')
	.attachFiles(['./Misc/happygif.gif'])
	.setImage('attachment://happygif.gif')
	message.channel.send(exampleEmbed);
}
if(command === 'nevermisses') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription('**You forgot one thing, he never misses**')
	.attachFiles(['./Misc/nevermissgif.gif'])
	.setImage('attachment://nevermissgif.gif')
	message.channel.send(exampleEmbed);
}
if(command === 'spideydance') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription('**When the camera keeps on rolling...**')
	.attachFiles(['./Misc/spideygif.gif'])
	.setImage('attachment://spideygif.gif')
	message.channel.send(exampleEmbed);
}
if(command === 'dafuq') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
//	.setDescription('?????????????????????')
	.attachFiles(['./Misc/dafuq.gif'])
	.setImage('attachment://dafuq.gif')
	message.channel.send(exampleEmbed);
}
if(command === 'dafuq1') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
//	.setDescription('?????????????????????')
	.attachFiles(['./Misc/dafuq1.jpg'])
	.setImage('attachment://dafuq1.jpg')
	message.channel.send(exampleEmbed);
}
if(command === 'dafuq2') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
//	.setDescription('?????????????????????')
	.attachFiles(['./Misc/dafuq2.jpg'])
	.setImage('attachment://dafuq2.jpg')
	message.channel.send(exampleEmbed);
}
if(command === 'dafuq3') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
//	.setDescription('?????????????????????')
	.attachFiles(['./Misc/dafuq3.jpg'])
	.setImage('attachment://dafuq3.jpg')
	message.channel.send(exampleEmbed);
}

	


});

//RAIDS
client.on('message', (message) => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const TB1captains = message.guild.roles.find(role => role.name === 'TB1 Captain');
const TB2captains = message.guild.roles.find(role => role.name === 'TB2 Captain');
const TB3captains = message.guild.roles.find(role => role.name === 'TB3 Captain');

//RAID LAUNCHES                   //RAID CHANNELS&TESTING 
if (message.channel.id === '429231250600099850' || message.channel.id === '462365472248299521' || message.channel.id === '643140903300497408' || message.channel.id === '606119830516400162') { 
if(command === 'u6') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
message.channel.bulkDelete(1)
message.channel.send("@everyone Ultimus 6 Launched")
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(command === 'u7') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
message.channel.bulkDelete(1)
message.channel.send("@everyone Ultimus 7 Launched")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(command === 'a4') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
message.channel.bulkDelete(1)
message.channel.send("@everyone Alpha 4 Launched")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(command === 'b4') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
message.channel.bulkDelete(1)
message.channel.send("@everyone Beta 4 Launched")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(command === 'g4') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
message.channel.bulkDelete(1)
message.channel.send("@everyone Gamma 4 Launched")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
}

//LAUNCHING ACTUAL RAIDS      //testing room   || message.channel.id === '617707484626288672'
if(command === 'raid') {
if(args[0] === "ultimus" && args[1] === "6"){
if (message.channel.id === '656244057244303361' || message.channel.id === '643229492650704973' || message.channel.id === '617707484626288672') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
//                           TB2 ULT 6 ROOM                             TB3 ULT 6 ROOM                       
	message.channel.bulkDelete(100)
    message.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Ultimus6.png')] });
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  	
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  		
} else {
message.channel.send("You dont have permission to use this command.")
}
} else {
	message.channel.send("Command cannot be used here.")
}
}
if(args[0] === "ultimus" && args[1] === "7"){
if (message.channel.id === '634155222490415104' || message.channel.id === '634155347736526848' || message.channel.id === '646322699869880340' || message.channel.id === '617707484626288672') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
//                           TB1 ULT 7 ROOM                             TB2 ULT 7 ROOM                              TB3 ULT 7 ROOM
	message.channel.bulkDelete(100)
    message.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Ultimus7.png')] });
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  	
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  		
} else {
message.channel.send("You dont have permission to use this command.")
}
} else {
	message.channel.send("Command cannot be used here.")
}
}
if(args[0] === "alpha" && args[1] === "4"){ 
if (message.channel.id === '656230420265828363' || message.channel.id === '656230665221701682' || message.channel.id === '656207417033359371' || message.channel.id === '656216714723459116' || message.channel.id === '656232194137784333' || message.channel.id === '656232345371672577' || message.channel.id === '643229344793231370' || message.channel.id === '617707484626288672') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
//                       TB1 EVENT ROOM#1                           TB1 EVENT ROOM#2                           TB2 EVENT ROOM#1                           TB2 EVENT ROOM#2                           TB3 EVENT ROOM#1                           TB3 EVENT ROOM#2                           TB3 ALPHA ROOM 
	message.channel.bulkDelete(100)
    message.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Alpha4.png')] });
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  	
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  		
} else {
message.channel.send("You dont have permission to use this command.")
}
} else {
	message.channel.send("Command cannot be used here.")
}
}
if(args[0] === "beta" && args[1] === "4"){
if (message.channel.id === '656230420265828363' || message.channel.id === '656230665221701682' || message.channel.id === '656207417033359371' || message.channel.id === '656216714723459116' || message.channel.id === '656232194137784333' || message.channel.id === '656232345371672577' || message.channel.id === '651159388685336587' || message.channel.id === '617707484626288672') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
//                       TB1 EVENT ROOM#1                           TB1 EVENT ROOM#2                           TB2 EVENT ROOM#1                           TB2 EVENT ROOM#2                           TB3 EVENT ROOM#1                           TB3 EVENT ROOM#2 TB3 room 
message.channel.bulkDelete(100)
    message.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Beta4.png')] });
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  	
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  		
} else {
message.channel.send("You dont have permission to use this command.")
}
} else {
	message.channel.send("Command cannot be used here.")
}
}
if(args[0] === "gamma" && args[1] === "4"){
if (message.channel.id === '656230420265828363' || message.channel.id === '656230665221701682' || message.channel.id === '656207417033359371' || message.channel.id === '656216714723459116' || message.channel.id === '656232194137784333' || message.channel.id === '656232345371672577' || message.channel.id === '655246084418830346' || message.channel.id === '617707484626288672') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
//                           TB1 EVENT ROOM#1                           TB1 EVENT ROOM#2                           TB2 EVENT ROOM#1                           TB2 EVENT ROOM#2                           TB3 EVENT ROOM#1                           TB3 EVENT ROOM#2                            TB3 GAMMA ROOM :/
message.channel.bulkDelete(100)
    message.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Gamma4.png')] });
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  	
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  		
} else {
message.channel.send("You dont have permission to use this command.")
}
} else {
	message.channel.send("Command cannot be used here.")
}
}
}

//RAID REFRESH GREEK/ULTIMUS 6 & 7
if(command === 'refresh') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {	
if(args[0] === "alpha" && args[1] === "4"){
if (message.channel.id === '656230420265828363') { //TB1 EVENTROOM1
	message.channel.bulkDelete(1)
// TB1 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-alpha")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid alpha 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656230665221701682') { //TB1 EVENTROOM2
	// TB1 EVENT ROOM #2
	message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-alpha")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid alpha 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
	
}
if (message.channel.id === '656207417033359371') { //TB2 EVENTROOM1
	message.channel.bulkDelete(1)
// TB2 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-alpha")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid alpha 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656216714723459116') { //TB2 EVENTROOM2
message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-alpha")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid alpha 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656232194137784333') { //TB3 EVENTROOM1
	message.channel.bulkDelete(1)
// TB3 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-alpha")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid alpha 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656232345371672577') { //TB3 EVENTROOM2
message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-alpha")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid alpha 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
}
if(args[0] === "beta" && args[1] === "4"){
if (message.channel.id === '656230420265828363') { //TB1 EVENTROOM1
//***********************************TB1 BETA 4 HERE****************************
//*****************************************************************************
	message.channel.bulkDelete(1)
//TB1 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-beta")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid beta 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656230665221701682') { //TB1 EVENTROOM2
	message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-beta")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid beta 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656207417033359371') { //TB2 EVENTROOM1
	message.channel.bulkDelete(1)
//TB2 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-beta")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid beta 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656216714723459116') { //TB2 EVENTROOM2
	message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-beta")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid beta 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656232194137784333') { //TB3 EVENTROOM1
message.channel.bulkDelete(1)
//TB3 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-beta")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid beta 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656232345371672577') { //TB3 EVENTROOM2
message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-beta")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid beta 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
}
if(args[0] === "gamma" && args[1] === "4"){
if (message.channel.id === '656230420265828363') { //TB1 EVENTROOM1
	message.channel.bulkDelete(1)
// TB1 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-gamma")).catch();
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid gamma 4')).catch();;
	};
	if (message.attachments.size > 0) message.delete(5000).catch();;
	  })});
}
if (message.channel.id === '656230665221701682') { //TB1 EVENTROOM2
	message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-gamma")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid gamma 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656207417033359371') {
	message.channel.bulkDelete(1)
// TB2 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-gamma")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid gamma 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656216714723459116') {
message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-gamma")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid gamma 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}	
if (message.channel.id === '656232194137784333') {
message.channel.bulkDelete(1)
// TB3 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-gamma")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid gamma 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656232345371672577') {
message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-gamma")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid gamma 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
}
if(args[0] === "ultimus" && args[1] === "6"){
if (message.channel.id === '656244057244303361'){
message.channel.bulkDelete(1)
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid ultimus 6')).catch(err => console.log(err));;
	};
	if (message.attachments.size > 0) message.delete(5000).catch(err => console.log(err));;
	  })});
}
if (message.channel.id === '643229492650704973'){
message.channel.bulkDelete(1)
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid ultimus 6'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
}
if(args[0] === "ultimus" && args[1] === "7"){
if (message.channel.id === '634155222490415104') { //TB1 U7ROOM
message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid ultimus 7'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '634155347736526848') {
message.channel.bulkDelete(1)
//TB1 U7 ROOM
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid ultimus 7'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '646322699869880340') {
message.channel.bulkDelete(1)
//TB3 U7 ROOM
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid ultimus 7'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
}
} else {
message.channel.send("You do not have permission to use this command.")
}
}

});
 
//WAR  //example: !counter aim/+info || !submit counter aim)     
client.on("message", async message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
//Submit war counters below
let counter = args[0]; 
let aim = args[1];
let asgardians = args[1];
let brawlers = args[1];
let shield = args[1];
let s6 = args[1];

if(command === 'counter') { //123 or bottesting
if (message.channel.id === '560885677475102740' || message.channel.id === '562757850477101063' || message.channel.id === '643140704624967694' || message.channel.id === '606119830516400162') {
if(args[0] == "aim"){
const aimcounterimage = client.channels.get('666332891730673668')
aimcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counteraim = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counteraim.url)
message.channel.send(attachment);
})
} else if(args[0] == "aim+info"){
const channelToCheckImagesallin1 = client.channels.get('665762283883855873')
const channelToCheckText = client.channels.get('665671446026125312')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });
const messages2 = await channelToCheckImagesallin1.fetchMessages({ limit: 1 });
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const counteraim = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage('https://i.ibb.co/vjkFbPM/AIM-Counters.png') 
message.channel.send(counteraim);

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
message.channel.send(embed);
} else if(args[0] == "asgardians"){
const asgardcounterimage = client.channels.get('666340204872990730')
asgardcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterasgard = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterasgard.url)
message.channel.send(attachment);
})
} else if(args[0] == "asgardians+info"){
const channelToCheckImagesallin1 = client.channels.get('666271524793221121')
const channelToCheckText = client.channels.get('666271343536373761')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });
const messages2 = await channelToCheckImagesallin1.fetchMessages({ limit: 1 });
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const counterasgard = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage('https://i.ibb.co/6WghFCz/Asgardians-Counters.png') 
message.channel.send(counterasgard);

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
message.channel.send(embed);
} else if(args[0] == "brawlers"){
const brawlerscounterimage = client.channels.get('666340239903686659')
brawlerscounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterbrawlers = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterbrawlers.url)
message.channel.send(attachment);
})
} else if(args[0] == "brawlers+info"){
const channelToCheckImagesallin1 = client.channels.get('666317849375277077')
const channelToCheckText = client.channels.get('666317820656615435')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });
const messages2 = await channelToCheckImagesallin1.fetchMessages({ limit: 1 });
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const counterbrawlers = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage('https://i.ibb.co/0jsbMQ4/Brawlers-Counters.png') 
message.channel.send(counterbrawlers);

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
message.channel.send(embed);
}  else if(args[0] == "shield"){
const shieldcounterimage = client.channels.get('666340284962963524')
shieldcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const countershield = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(countershield.url)
message.channel.send(attachment);
})	
} else if(args[0] == "shield+info"){
const channelToCheckImagesallin1 = client.channels.get('666318805844230144')
const channelToCheckText = client.channels.get('666318788140072981')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });
const messages2 = await channelToCheckImagesallin1.fetchMessages({ limit: 1 });
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const countershield = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage('https://i.ibb.co/ByJTvwh/Coulson-Counters.png') 
message.channel.send(countershield);

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
message.channel.send(embed);	
} else if(args[0] == "s6"){
const s6counterimage = client.channels.get('666340284962963524')
s6counterimage.fetchMessages({ limit: 1 }).then(messages => {
const counters6 = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counters6.url)
message.channel.send(attachment);
})	
} else if(args[0] == "s6+info"){
const channelToCheckImagesallin1 = client.channels.get('666319027538493450')
const channelToCheckText = client.channels.get('666319009465237524')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });
const messages2 = await channelToCheckImagesallin1.fetchMessages({ limit: 1 });
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const counters6 = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage('https://i.ibb.co/YZGN5JP/S6-Counters.png') 
message.channel.send(counters6);

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
message.channel.send(embed);	
	
} else {
message.channel.send("Please use a valid team phrase, such as aim,asgardians,brawlers,shield, or s6.").catch(console.error);	
}
} else {
message.channel.send("Sorry, this doesn't work here. Head to <#673261006918516741> or your war chat channel and try again.").catch(console.error);
}
}

if(command === 'submit') {
if (message.channel.id === '673261006918516741' || message.channel.id === '606119830516400162') {
if (args[0] === "counter"){	
}
if (args[1] === "aim"){	
const CheckImage = client.channels.get('666305824813219870')
const CheckText = client.channels.get('666305824813219870')
const AimSubmission = client.channels.get('666370149766529054')
const messages1 = await CheckText.fetchMessages({ limit: 2 });
const messages2 = await CheckImage.fetchMessages({ limit: 2 });

const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
AimSubmission.send(embed);
CheckText.send("War Counter Submission Received.");
} else if (args[1] === "asgardians"){
const CheckImage = client.channels.get('666305824813219870')
const CheckText = client.channels.get('666305824813219870')
const AsgardianSubmission = client.channels.get('666384999246725150')
const messages1 = await CheckText.fetchMessages({ limit: 2 });
const messages2 = await CheckImage.fetchMessages({ limit: 2 });

const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
AsgardianSubmission.send(embed);
CheckText.send("War Counter Submission Received.");
} else if (args[1] === "brawlers"){
const CheckImage = client.channels.get('666305824813219870')
const CheckText = client.channels.get('666305824813219870')
const BrawlerSubmission = client.channels.get('666385224174927873')
const messages1 = await CheckText.fetchMessages({ limit: 2 });
const messages2 = await CheckImage.fetchMessages({ limit: 2 });

const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
BrawlerSubmission.send(embed);
CheckText.send("War Counter Submission Received.");
} else if (args[1] === "shield"){
const CheckImage = client.channels.get('666305824813219870')
const CheckText = client.channels.get('666305824813219870')
const ShieldSubmission = client.channels.get('666385470514790440')
const messages1 = await CheckText.fetchMessages({ limit: 2 });
const messages2 = await CheckImage.fetchMessages({ limit: 2 });

const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
ShieldSubmission.send(embed);
CheckText.send("War Counter Submission Received.");
} else if (args[1] === "s6"){	
const CheckImage = client.channels.get('666305824813219870')
const CheckText = client.channels.get('666305824813219870')
const S6Submission = client.channels.get('666385715566739467')
const messages1 = await CheckText.fetchMessages({ limit: 2 });
const messages2 = await CheckImage.fetchMessages({ limit: 2 });

const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
S6Submission.send(embed);
CheckText.send("War Counter Submission Received.");
} else {
message.channel.send("Please use a valid phrase, such as !submit counter aim,asgardians,brawlers,shield, or s6.").catch(console.error);	
}
} else {//channel ID
message.channel.send("Sorry, this doesn't work here. Head to <#673261006918516741> and try again.").catch(console.error);
}
}//submit
});

client.login(process.env.TOKEN);
