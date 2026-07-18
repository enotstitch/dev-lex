import 'dotenv/config';
import { Bot } from 'grammy';

const bot = new Bot(process.env.BOT_TOKEN);

bot.command('start', (ctx) => {
  ctx.reply('Привет! Я DevLex — бот для изучения технического английского.');
});

bot.start();
