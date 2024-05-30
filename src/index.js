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

const player3 = {
  NAME: 'Peach',
  SPEED: '3',
  MANEUVERABILITY: '4',
  POWER: '2',
  SCORE: '0',
}

const player4 = {
  NAME: 'Yoshi',
  SPEED: '2',
  MANEUVERABILITY: '4',
  POWER: '3',
  SCORE: '0',
}

const player5 = {
  NAME: 'Bowser',
  SPEED: '5',
  MANEUVERABILITY: '2',
  POWER: '5',
  SCORE: '0',
}

const player6 = {
  NAME: 'Donkey Kong',
  SPEED: '2',
  MANEUVERABILITY: '2',
  POWER: '5',
  SCORE: '0',
}

async function randomPlayers(...players) {
  const randomIndex1 = Math.floor(Math.random() * players.length)
  let randomIndex2

  do {
    randomIndex2 = Math.floor(Math.random() * players.length)
  } while (randomIndex2 === randomIndex1)

  return [players[randomIndex1], players[randomIndex2]]
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

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  )
}

async function playRaceEngine(player1, player2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`)

    let block = await getRandomBlock()
    console.log(`Bloco: ${block}`)

    let diceResult1 = await rollDice()
    let diceResult2 = await rollDice()

    let totalTestSkill1 = 0
    let totalTestSkill2 = 0

    if (block === 'RETA') {
      totalTestSkill1 = diceResult1 + player1.SPEED
      totalTestSkill2 = diceResult2 + player2.SPEED

      await logRollResult(
        player1.NAME,
        'velocidade',
        diceResult1,
        player1.SPEED
      )
      await logRollResult(
        player2.NAME,
        'velocidade',
        diceResult2,
        player2.SPEED
      )
    }
    if (block === 'CURVA') {
      totalTestSkill1 = diceResult1 + player1.MANEUVERABILITY
      totalTestSkill2 = diceResult2 + player2.MANEUVERABILITY

      await logRollResult(
        player1.NAME,
        'manobrabilidade',
        diceResult1,
        player1.MANEUVERABILITY
      )
      await logRollResult(
        player2.NAME,
        'manobrabilidade',
        diceResult2,
        player2.MANEUVERABILITY
      )
    }
    if (block === 'CONFRONTO') {
      powerResult1 = diceResult1 + player1.POWER
      powerResult2 = diceResult2 + player2.POWER

      console.log(`${player1.NAME} confrontou com ${player2.NAME}! 🥊`)

      await logRollResult(player1.NAME, 'poder', diceResult1, player1.POWER)
      await logRollResult(player2.NAME, 'poder', diceResult2, player2.POWER)

      if (powerResult1 > powerResult2 && player2.SCORE > 0) {
        console.log(
          `${player1.NAME} venceu o confronto! ${player2.NAME} perdeu 1 ponto 🐢`
        )
        player2.SCORE--
      } else if (powerResult2 > powerResult1 && player1.SCORE > 0) {
        console.log(
          `${player2.NAME} venceu o confronto! ${player1.NAME} perdeu 1 ponto 🐢`
        )
        player1.SCORE--
      } else if (powerResult1 === powerResult2) {
        console.log(
          powerResult1 === powerResult2
            ? 'Confronto empatado! Nenhum ponto foi perdido.'
            : ''
        )
      }
    }

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${player1.NAME} marcou um ponto!`)
      player1.SCORE++
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${player2.NAME} marcou um ponto!`)
      player1.SCORE++
    }

    console.log('____________________________________________')
  }
}

async function declareWin(player1, player2) {
  console.log('Resultado Final: ')
  console.log(`${player1.NAME}: ${player1.SCORE} pontos(s)`)
  console.log(`${player2.NAME}: ${player2.SCORE} pontos(s)`)

  if (player1.SCORE > player2.SCORE)
    console.log(`\n${player1.NAME} venceu a corrida! Parabéns 🏆`)
  else if (player2.SCORE > player1.SCORE)
    console.log(`\n${player2.NAME} venceu a corrida! Parabéns 🏆`)
  else console.log('A corrida terminou em empate.')
}

;(async function Main() {
  const [randomPlayer1, randomPlayer2] = await randomPlayers(
    player1,
    player2,
    player3,
    player4,
    player5,
    player6
  )

  console.log(
    `🏁🚨 Corrida entre ${randomPlayer1.NAME} e ${randomPlayer2.NAME} começando...\n`
  )

  await playRaceEngine(player1, player2)

  await declareWin(randomPlayer1, randomPlayer2)
})()
