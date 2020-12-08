const Discord = require("discord.js") 
const client = new Discord.Client();
const prefix = "?";



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

//Commande PUB MP

client.on('message', message => {

    let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);
            if (cmd === prefix + "mp"){
        if(message.author.id != "ID") return;
                if(message.channel.type === "dm") return;
               if(message.deletable) message.delete();

                let MpMessage = args.slice(0).join(" ");

                message.guild.members.forEach(member => {
                    member.send(`${MpMessage}`)
                

	})
            
            }
})



client.login('Token');