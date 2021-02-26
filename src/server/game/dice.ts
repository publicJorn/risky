const rollDie = (): number => Math.floor(Math.random() * 6) + 1

const rollDice = (nr: number): number[] => Array(nr).fill(null).map(rollDie)

export { rollDie, rollDice }
