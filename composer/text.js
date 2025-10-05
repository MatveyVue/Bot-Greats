const { Composer, Markup } = require('telegraf');

const composer = new Composer();

composer.start(async (ctx) => {
    const buttons = Markup.inlineKeyboard([
        [
            Markup.button.url('App', 'https://t.me/Pythonproba_bot/GreatsJobs'),
        ]
    ]);

    return ctx.reply(
        `Hey there! 👋`,
        { parse_mode: 'HTML', ...buttons }
    );
});
module.exports = composer;
