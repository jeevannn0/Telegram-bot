import TelegramBot from 'node-telegram-bot-api';

// Replace with your actual Telegram token
const token = '7568591701:AAE5jQwFDp8Sr2rcxIHE3y8oXb-ld-wA_74'; // Use your actual token
const bot = new TelegramBot(token, { polling: true });

// Listening to commands or messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // Check for the command or specific message
  if (msg.text.toLowerCase() === '/start') {
    bot.sendMessage(chatId, 'Welcome! Type /project to see my Vite project.');
  } else if (msg.text.toLowerCase() === '/project') {
    const projectLink = 'https://portfolio-2ip.pages.dev/'; // Replace with your actual project link
    bot.sendMessage(chatId, `Check out my Vite project here: ${projectLink}`);
  } else {
    bot.sendMessage(chatId, 'Hello! I am your Vite-powered bot! Type /project to see my project.');
  }
});

export default bot;
