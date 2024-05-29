const player1 = {
  NAME: 'Mario',
  SPEED: '4',
  MANEUVERABILITY: '3',
  POWER: '3',
  SCORE: '0',
}

const player2 = {
  NAME: 'Luigi',
  SPEED: '3',
  MANEUVERABILITY: '4',
  POWER: '4',
  SCORE: '0',
}

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1
}

;(async function Main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NAME} e ${player2.NAME} começando...\n `
  )
})()
