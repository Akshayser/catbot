const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/HBlOhMc.png", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*CATBOT created by BASIL SER*
*Creator number : wa.me/919544685703?text=Hi%20Ameer%20Suhail.%20*

*Githublink (Setup)  :    https://github.com/itsmebasil0/catbot*

*Audio commads :   https://github.com/itsmebasil0/catbot/tree/master/uploads*

*Sticker commads : https://github.com/itsmebasil0/catbot/tree/master/uploads*

*Video For Setting Bot : https://youtube.com/channel/UCrnPCbv7jIKqAXQTllDV6Ng* 

*For More Updates Subscribe The Channel ☝*
`}) 

}));
