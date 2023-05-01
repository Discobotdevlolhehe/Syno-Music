const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const emoji = require(`../../botconfig/emojis.json`);
module.exports = {
  name: "Developer's Page",
  category: "Settings",
  aliases: ["dev", "page"],
  cooldown: 5,
  usage: "developer",
  description: "Gives you information on who the developers are and what they are upto",
  run: async (client, message, args, guildData, player, prefix) => {
    try {
      const emee = new MessageEmbed()
      .setColor("RANDOM")
      .addField("Developers" , `Who are they? What are they upto? what is their motive? Future plans? We can answer all that!`)
      .addField("<a:tick:908666945971298375> **DEVELOPERS** ***Hashirama Senjuᴰᴱⱽ#4222 and Mexican dream#4415 are my masters*** <a:tick:908666945971298375>" , `They are making me better daily and adding more features.. Thier motive is too make a revoultionary discord bot that can give every user free top class music in discord.. They plan on adding more premium features soon and they are currently working on a website featuring me!
      
      Information will keep changing whenever we have something new to inform!!!`)
      .setURL(config.links.server)
      .setTimestamp()
      .setFooter(ee.footertext, ee.footericon)
      message.channel.send({embeds: [emee]});
    } catch (e) {
      console.log(String(e.stack).bgRed)
			const emesdf = new MessageEmbed()
			.setColor(ee.wrongcolor)
			.setAuthor(`An Error Occurred`)
			.setDescription(`\`\`\`${e.message}\`\`\``);
			return message.channel.send({embeds: [emesdf]});
    }
  }
}