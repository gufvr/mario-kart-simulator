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

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`)

    let block = await getRandomBlock()
    console.log(`Bloco: ${block}`)

    let diceResult1 = await rollDice()
    let diceResult2 = await rollDice()

    let totalTestSkill1 = 0
    let totalTestSkill2 = 0

    if (block === 'RETA') {
      totalTestSkill1 = diceResult1 + character1.SPEED
      totalTestSkill2 = diceResult2 + character2.SPEED

      await logRollResult(
        character1.NAME,
        'velocidade',
        diceResult1,
        character1.SPEED
      )
      await logRollResult(
        character2.NAME,
        'velocidade',
        diceResult2,
        character2.SPEED
      )
    }
    if (block === 'CURVA') {
      totalTestSkill1 = diceResult1 + character1.MANEUVERABILITY
      totalTestSkill2 = diceResult2 + character2.MANEUVERABILITY

      await logRollResult(
        character1.NAME,
        'manobrabilidade',
        diceResult1,
        character1.MANEUVERABILITY
      )
      await logRollResult(
        character2.NAME,
        'manobrabilidade',
        diceResult2,
        character2.MANEUVERABILITY
      )
    }
    if (block === 'CONFRONTO') {
      powerResult1 = diceResult1 + character1.POWER
      powerResult2 = diceResult2 + character2.POWER

      console.log(`${character1.NAME} confrontou com ${character2.NAME}! 🥊`)

      await logRollResult(
        character1.NAME,
        'poder',
        diceResult1,
        character1.POWER
      )
      await logRollResult(
        character2.NAME,
        'poder',
        diceResult2,
        character2.POWER
      )

      if (powerResult1 > powerResult2 && character2.SCORE > 0) {
        console.log(
          `${character1.NAME} venceu o confronto! ${character2.NAME} perdeu 1 ponto 🐢`
        )
        character2.SCORE--
      } else if (powerResult2 > powerResult1 && character1.SCORE > 0) {
        console.log(
          `${character2.NAME} venceu o confronto! ${character1.NAME} perdeu 1 ponto 🐢`
        )
        character1.SCORE--
      } else if (powerResult1 === powerResult2) {
        console.log(
          powerResult1 === powerResult2
            ? 'Confronto empatado! Nenhum ponto foi perdido.'
            : ''
        )
      }
    }

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NAME} marcou um ponto!`)
      character1.SCORE++
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NAME} marcou um ponto!`)
      character1.SCORE++
    }

    console.log('____________________________________________')
  }
}

async function declareWin(character1, character2) {
  console.log('Resultado Final: ')
  console.log(`${character1.NAME}: ${character1.SCORE} pontos(s)`)
  console.log(`${character2.NAME}: ${character2.SCORE} pontos(s)`)

  if (character1.SCORE > character2.SCORE)
    console.log(`\n${character1.NAME} venceu a corrida! Parabéns 🏆`)
  else if (character2.SCORE > character1.SCORE)
    console.log(`\n${character2.NAME} venceu a corrida! Parabéns 🏆`)
  else console.log('A corrida terminou em empate.')
}

;(async function Main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NAME} e ${player2.NAME} começando...\n `
  )

  await playRaceEngine(player1, player2)

  await declareWin(player1, player2)
})()
