import TelegramBot from 'node-telegram-bot-api';

// Replace with your actual Telegram token
const token = '7568591701:AAE5jQwFDp8Sr2rcxIHE3y8oXb-ld-wA_74'; // Use your actual token
const bot = new TelegramBot(token);

// Create an endpoint to handle webhook
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Telegram will send POST requests to this endpoint
    const body = req.body;
    bot.processUpdate(body); // Process incoming updates
    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}


