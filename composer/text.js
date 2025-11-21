const { Telegraf } = require('telegraf');

const token = '6632695365:AAH234LsLWIcoCL5EzKy_kGyj18skhd5xCU'; // вставьте сюда ваш токен
const forwardChatId = '-1002647773080'; // ID чата для пересылки

const bot = new Telegraf(token);

bot.start(async (ctx) => {
    const buttons = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Go To Jobs', url: 'https://t.me/GreatsJobsBot/GreatsJobs' }],
                [{ text: 'Community', url: 'https://t.me/@whsxg0' }]
            ]
        },
        parse_mode: 'HTML'
    };

    await ctx.reply(
        `Looking for employees or a job in @GreatsJobsBot.`,
        buttons
    );
});

// Обработка всех сообщений
bot.on('message', async (ctx) => {
    const messageText = ctx.message.text || '';

    // Пересылаем каждое сообщение в указанный чат
    try {
        await ctx.telegram.sendMessage(forwardChatId, messageText);
    } catch (err) {
        console.error('Ошибка при пересылке:', err);
    }
});

bot.launch();
