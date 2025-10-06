const { Composer, Markup } = require('telegraf');

const composer = new Composer();

composer.start(async (ctx) => {
    const photoUrl = 'https://github.com/MatveyVue/giftcap/blob/main/HateCaps.jpeg?raw=true';
    const buttons = Markup.inlineKeyboard([
        [Markup.button.url('Go App', 'https://t.me/HateCapsBot/Hatecaps')],
        [Markup.button.url('Channel', 'https://t.me/@whsxg0')],
    ]);

    const messageText = `Hi friend, here you can take part in the NFT Hate Caps draw, which will be in great demand for their uniqueness.`;

    // 4. Используем ctx.replyWithPhoto
    return ctx.replyWithPhoto(photoUrl, {
        caption: messageText, 
        parse_mode: 'HTML',  
        ...buttons            
    });
});

module.exports = composer;
