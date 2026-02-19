const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'kluma12-y3Ew.aternos.me',
  port: 28071,
  username: 'AFK_Bot_24h'
})

bot.on('spawn', () => {
  console.log('Bot joined!')

  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 500)
  }, 60000)
})

bot.on('error', err => console.log('Error:', err))
bot.on('end', () => console.log('Bot disconnected'))
