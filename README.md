TapMe Bot


Bot - https://t.me/TapMe_Test9_bot/bottapme1


Demo Video - https://drive.google.com/file/d/1egyFpivOMhEAZMSUe39strOxKhu7O6oh/view?usp=sharing


Vercel - https://telegram-bot-phi-jade.vercel.app/



TapMe Bot is a Telegram bot built with Vite and TypeScript that interacts with users and provides various functionalities. This README will guide you on how to set up and run the project locally.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js (version 14 or later)
npm (Node Package Manager)
Getting Started
Clone the Repository

Begin by cloning the repository to your local machine:

  
   
git clone https://github.com/jeevannn0/Telegram-bot.git
cd tapme-bot
Install Dependencies

Navigate to the project directory and install the necessary dependencies:

  
   
npm install
Configure the Bot

Create a .env file in the root of your project and add your Telegram bot token:

plaintext
   
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
Run the Development Server

Start the Vite development server:

  
   
npm run dev
This will start the local server at http://localhost:3000 (or a different port if configured).

Start the Bot Locally

In a new terminal window, run the following command to start the TapMe Bot:

  
   
npm run start:bot
This will initiate the bot and begin listening for messages on Telegram.

Setting Up Webhook (Optional)
If you want to set up a webhook instead of using polling, run the following command in your terminal (replace your_telegram_bot_token and your_vercel_url):

  
   
curl -F "url=https://your-vercel-url/api/bot" https://api.telegram.org/bot<your_telegram_bot_token>/setWebhook
This will configure Telegram to send updates to your bot through the specified URL.

Usage
Once the bot is running, you can interact with it on Telegram by sending messages. Use commands like /start to initiate a conversation.