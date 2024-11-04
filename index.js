const express = require("express");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");

const token = "7674361126:AAHnTanJwIX5mV2gGfrfyr4hMFpGnJGWwCI";
const bot = new TelegramBot(token, { polling: true });
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Hello, World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
