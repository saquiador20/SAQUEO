const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const canalsgr = new db.crearDB('canalsugerencias')
module.exports = {
  name: "canalsgr", 
  alias: ["cs"], 

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("no tienes permiso!")
  
  const canal =  message.mentions.channels.first()
  if(!canal) return message.channel.send("Debes mencionar un canal")
  
  message.channel.send(`el proceso a sido exitoso ahora ${canal} es el canal de sugerencias!`)

canalsgr.establecer(`${message.guild}`, `${canal.id}`)
 }

}