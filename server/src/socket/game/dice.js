const rollDie = () => Math.floor(Math.random() * 6) + 1

const rollDice = (nr) => Array(nr).fill(null).map(rollDie)

module.exports = {
  rollDie,
  rollDice,
}
