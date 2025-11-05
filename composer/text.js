const { Composer, Markup } = require('telegraf');

const composer = new Composer();

composer.start(async (ctx) => {
    const buttons = Markup.inlineKeyboard([
        [Markup.button.url('Go App', 'https://t.me/HateCapsBot/Hatecaps')],
        [Markup.button.url('Channel', 'https://t.me/@whsxg0')],
    ]);
    const messageText = `Hi friend, here you can take part in the NFT Hate Caps draw, which will be in great demand for their uniqueness.`;
});

module.exports = composer;
