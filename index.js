const { Telegraf } = require('telegraf');
const express = require('express');

const app = express();

const apiToken = '8398929849:AAE-JtjB7bvbBsA0ysoUigviTMOJZwEVUBI';

const bot = new Telegraf(apiToken, {
    telegram: {
        webhookReply: false
    }
});

app.use(express.json());
app.use(bot.webhookCallback(`/bot${apiToken}`));

app.get(`/`, async (_req, res) => {
    try {
        const url = `https://bot-greats.vercel.app/bot${apiToken}`;
        await bot.telegram.setWebhook(url);
        res.send("200");
    } catch {
        res.send('502')
    }
})

bot.use(require('./composer/text.js'));

app.listen(3212, () => {
    console.log('Server is running on port 3212');
});
