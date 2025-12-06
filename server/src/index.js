require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true })

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
    console.log(msg)

    if (messageText === "/start") {
        bot.sendMessage(chatId, "hello!");

    }
});
// bot.on("message", (msg) => {
//     const inlineKeyboard = {
//         reply_markup: {
//             inlineKeyboard = {
//                 [{ text: "option 1", callback_data: "1" }],
//                 [{ text: "option 2", callback_data: "2" }],
//                 [{ text: "option 3", callback_data: "3" }]
//         }
//         }
//     };

// });

