const {RichEmbed} = require('discord.js');

const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let user = message.mentions.users.first();

  const mentionuser = message.mentions.users.first()

  if (message.mentions.users.size < 1) return message.reply('Mentioneaza pe cineva!')

  const embed = new Discord.RichEmbed()

 const ship = [

 ':heart: 1% :heart:',

 ':heart: 2% :heart:',

 ':heart: 3% :heart:',

 ':heart: 4% :heart:',

 ':heart: 5% :heart:',

 ':heart: 6% :heart:',

 ':heart: 7% :heart:',

 ':heart: 8% :heart:',

 ':heart: 9% :heart:',

 ':heart: 10% :heart:',

 ':heart: 11% :heart:',

 ':heart: 12% :heart:',

 ':heart: 13% :heart:',

 ':heart: 14% :heart:',

 ':heart: 15% :heart:',

 ':heart: 16% :heart:',

 ':heart: 17% :heart:',

 ':heart: 18% :heart:',

 ':heart: 19% :heart:',

 ':heart: 20% :heart:',

 ':heart: 21% :heart:',

 ':heart: 22% :heart:',

 ':heart: 23% :heart:',

 ':heart: 24% :heart:',

 ':heart: 25% :heart:',

 ':heart: 26% :heart:',

 ':heart: 27% :heart:',

 ':heart: 28% :heart:',

 ':heart: 29% :heart:',

 ':heart: 30% :heart:',

 ':heart: 31% :heart:',

 ':heart: 32% :heart:',

 ':heart: 33% :heart:',

 ':heart: 34% :heart:',

 ':heart: 35% :heart:',

 ':heart: 36% :heart:',

 ':heart: 37% :heart:',

 ':heart: 38% :heart:',

 ':heart: 39% :heart:',

 ':heart: 40% :heart:',

 ':heart: 41% :heart:',

 ':heart: 42% :heart:',

 ':heart: 43% :heart:',

 ':heart: 44% :heart:',

 ':heart: 45% :heart:',

 ':heart: 46% :heart:',

 ':heart: 47% :heart:',

 ':heart: 48% :heart:',

 ':heart: 49% :heart:',

 ':heart: 50% :heart:',

 ':heart: 51% :heart:',

 ':heart: 52% :heart:',

 ':heart: 53% :heart:',

 ':heart: 54% :heart:',

 ':heart: 55% :heart:',

 ':heart: 56% :heart:',

 ':heart: 57% :heart:',

 ':heart: 58% :heart:',

 ':heart: 59% :heart:',

 ':heart: 60% :heart:',

 ':heart: 61% :heart:',

 ':heart: 62% :heart:',

 ':heart: 63% :heart:',

 ':heart: 64% :heart:',

 ':heart: 65% :heart:',

 ':heart: 66% :heart:',

 ':heart: 67% :heart:',

 ':heart: 68% :heart:',

 ':heart: 69% :heart:',

 ':heart: 70% :heart:',

 ':heart: 71% :heart:',

 ':heart: 72% :heart:',

 ':heart: 73% :heart:',

 ':heart: 74% :heart:',

 ':heart: 75% :heart:',

 ':heart: 76% :heart:',

 ':heart: 77% :heart:',

 ':heart: 78% :heart:',

 ':heart: 79% :heart:',

 ':heart: 80% :heart:',

 ':heart: 81% :heart:',

 ':heart: 82% :heart:',

 ':heart: 83% :heart:',

 ':heart: 84% :heart:',

 ':heart: 85% :heart:',

 ':heart: 86% :heart:',

 ':heart: 87% :heart:',

 ':heart: 88% :heart:',

 ':heart: 89% :heart:',

 ':heart: 90% :heart:',

 ':heart: 91% :heart:',

 ':heart: 92% :heart:',

 ':heart: 93% :heart:',

 ':heart: 94% :heart:',

 ':heart: 95% :heart:',

 ':heart: 96% :heart:',

 ':heart: 97% :heart:',

 ':heart: 98% :heart:',

 ':heart: 99% :heart:',

 ':heart: 100% :heart:',

 ];



 embed.setColor('ff0000');

 if (!user) return;

 embed.setDescription(`${message.author.username}#${message.author.discriminator}` + ship[Math.floor(Math.random()*ship.length)] + `${user.username}#${user.discriminator}`)

 message.channel.send({embed: embed});

 }



 exports.conf = {

   enabled: true,

   guildOnly: false,

   aliases: [],

   permLevel: 0

 };



 exports.help = {

   name: 'ship',

   description: 'Vezi daca te potrivesti cu o persoana',

   usage: '$ship <persoana>'

 };