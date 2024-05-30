<h1>Desafio de projeto da Dio: Mario Kart.JS</h1>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </table>

<p></p>

## Descrição do Projeto
Este projeto é um simulador de corrida entre personagens icônicos do universo Mario. Os personagens Mario, Luigi, Peach, Yoshi, Bowser e Donkey Kong competem em uma série de rodadas, cada uma contendo diferentes tipos de desafios, incluindo retas, curvas e confrontos diretos.

## Funcionalidades Principais
- Seleção Aleatória de Personagens: Dois personagens são selecionados aleatoriamente para competir em cada corrida.
- Simulação de Rodadas: A corrida é dividida em 5 rodadas, com diferentes tipos de blocos (reta, curva, confronto) determinados aleatoriamente.
- Rolagem de Dados: Em cada rodada, os personagens rolam um dado que, combinado com seus atributos específicos (velocidade, manobrabilidade, poder), determina o desempenho na rodada.
- Sistema de Pontuação: Os personagens ganham pontos com base no desempenho em cada rodada. Em confrontos diretos, personagens podem perder pontos.
- Declaração de Vencedor: Ao final das 5 rodadas, o personagem com a maior pontuação é declarado vencedor.

## Atributos dos Personagens
- Velocidade (SPEED): Determina a vantagem em blocos de reta.
- Manobrabilidade (MANEUVERABILITY): Determina a vantagem em blocos de curva.
- Poder (POWER): Determina a vantagem em blocos de confronto.
- Pontuação (SCORE): Acumulada ao longo das rodadas para determinar o vencedor.

## Exemplo de Uso
Ao iniciar o simulador, dois personagens são escolhidos aleatoriamente para competir. A cada rodada, o tipo de bloco é determinado e os personagens rolam um dado. O resultado do dado, somado ao atributo relevante do personagem, determina quem ganha a rodada. Após 5 rodadas, o personagem com mais pontos é declarado vencedor.

## Tecnologias Utilizadas
- JavaScript (ES6)
- Node.js
- Funções assíncronas para operações de jogo

Este projeto demonstra habilidades de manipulação de objetos, uso de funções assíncronas, lógica de jogo e simulação, sendo um ótimo exemplo de como aplicar conceitos de programação em um contexto de entretenimento.
