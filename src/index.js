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

async function getRandomBlock() {
  let random = Math.random()
  let result

  switch (true) {
    case random < 0.33:
      result = 'RETA'
      break
    case random > 0.66:
      result = 'CURVA'
      break
    default:
      result = 'CONFRONTO'
  }

  return result
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`)

    let block = await getRandomBlock()
    console.log(`Bloco: ${block}`)
  }

  let diceResult1 = await rollDice()
  let diceResult2 = await rollDice()

  let totalTestSkill1 = 0
  let totalTestSkill2 = 0
}

;(async function Main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NAME} e ${player2.NAME} começando...\n `
  )

  await playRaceEngine(player1, player2)
})()
