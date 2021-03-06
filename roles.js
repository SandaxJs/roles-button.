const Discord = require('discord.js');

const Client = new Discord.Client({intents: 32757 });

const { CommandInteraction, MessageEmbed, interaction } = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders'); 

const { MessageMenuOption, MessageMenu, MessageActionRow, MessageButton } = require("discord.js")



const prefix = "!";
 
module.exports = {
    name: "",
    execute(Client, message, args) {
        {


            const giveaway = message.guild.roles.cache.get('934726238159913010'); // role giveaway 
            const events = message.guild.roles.cache.get('934725321402503198'); // role events 
            const live = message.guild.roles.cache.get('934725966838788126'); // role live 

            const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('giveaway')
                    .setEmoji("<:discord_giveaway:934727042077978654>")
					.setLabel('ใป๐ก๐ผ๐๐ถ๐ณ๐ถ๐ฐ๐ฎ๐๐ถ๐ผ๐ป ๐๐ถ๐๐ฒ๐ฎ๐๐ฎ๐')
					.setStyle('SUCCESS'),

                    new MessageButton()
					.setCustomId('events')
                    .setEmoji("<:Eventsnotify:934727488079290419>")
					.setLabel('ใป๐ก๐ผ๐๐ถ๐ณ๐ถ๐ฐ๐ฎ๐๐ถ๐ผ๐ป ๐ฒฬ๐๐ฒฬ๐ป๐ฒ๐บ๐ฒ๐ป๐')
					.setStyle('SECONDARY'),
                
                new MessageButton()
					.setCustomId('live')
                    .setEmoji("<:Twitch:934727162458681345>")
					.setLabel('ใป๐ก๐ผ๐๐ถ๐ณ๐ถ๐ฐ๐ฎ๐๐ถ๐ผ๐ป ๐๐ถ๐๐ฒ')
					.setStyle('PRIMARY'),
			);  

            const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('<:Roles:935875866477608970> __Choisissez votre rรดle !__ ')
			.setURL('')
			.setDescription("\nใค**Les rรดles de notification** :\n\n <@&934726238159913010> : **Notifier lors d'un Giveaway** <:discord_giveaway:934727042077978654> \n\n <@&934725321402503198> : **Notifier lors d'un รฉvรจnement ** <:Eventsnotify:934727488079290419> \n\n <@&934725966838788126> : **Notifier lors d'un live de __Streamer__** <:Twitch:934727162458681345> ");

            
            message.channel.send({embeds: [embed], components: [row] });
            
            Client.on("interactionCreate", async interaction =>  {
                if(interaction.isButton()){

                     // ADD ROLE LIVE 
                    interaction.deferUpdate();
                    if(interaction.customId === "live")
                    interaction.member.roles.add("934725966838788126")
			
                    // REMOVE ROLES
                    if(interaction.customId === "live")
                    if(interaction.member.roles.cache.has("934725966838788126")) {
                    interaction.member.roles.remove(events)
                         }
                     //================================================================================================

                    //   ADD ROLE GIVEAWAY
                    if(interaction.customId === "giveaway")
                    interaction.member.roles.add("934726238159913010") 
			
                    // REMOVE ROLES
                     if(interaction.customId === "giveaway")
                    if(interaction.member.roles.cache.has("934726238159913010")) {
                            interaction.member.roles.remove(events)
                        }
                     //================================================================================================
			
                    // ADD ROLE EVENTS

                    if(interaction.customId === "events")
                    interaction.member.roles.add("934725321402503198")
			
                     // REMOVE ROLES
                   if(interaction.customId === "events")
                    if(interaction.member.roles.cache.has("934725321402503198")) {
                            interaction.member.roles.remove(events)
                        }
                    
                     //================================================================================================
                     
                      interaction.followUp({ content: " <a:valid:933726196125028413> **Vos rรดles ont รฉtรฉ modifiรฉs !**", ephemeral: true })

                    

          .then(console.log)
          .catch(console.error)
                }
            })
     //========================
             };
            
            ;   
        }
    }
