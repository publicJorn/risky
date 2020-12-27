const WebSocket = require('ws')
const debug = require('debug')('game')

const { rollDice } = require('./dice.js')

const rollDiceAction = (clients) => {
  const data = {
    dice: rollDice(2),
  }

  debug('rolled dice:', data)
  clients.forEach((client) => {
    // Prevent send to caller: `client !== currentClient`
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          action: 'diceRolled',
          data,
        }),
      )
    }
  })
}

module.exports = ({ clients, currentClient }) => ({
  rollDice: () => rollDiceAction(clients),
})
