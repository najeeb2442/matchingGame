const main = document.querySelector("main")
const restart = document.querySelector(".restart")
const numRows = document.querySelector(".rows")
const numColumns = document.querySelector(".columns")
const message = document.querySelector(".message")

const wins = document.querySelector(".wins")
//const loses = document.querySelector(".loses")
const moves = document.querySelector(".moves")
const mistakes = document.querySelector(".mistakes")
//const cards = document.querySelectorAll(".card")
let cWins = 0
//let cLoses = 0
let cMoves = 0
let cMistakes = 0
let numOfCells = 4

let cardsFliped = 0
let firstCard = undefined
const colors = []

const randomColor = () => {
  return "#" + parseInt(Math.random() * 1000000)
}
const randomNumber = (num) => {
  return parseInt(Math.random() * 1000000) % num
}

// making event listener to each card
makeEventListener = () => {
  let cards = document.querySelectorAll(".card")
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cMoves += 1
      moves.innerText = `moves: ${cMoves}`
      if (cardsFliped == 0) {
        flip(card)
        card.setAttribute("disabled", true)
        cardsFliped += 1
        firstCard = card
      } else if (cardsFliped == 1) {
        flip(card)
        cardsFliped += 1
        card.setAttribute("disabled", true)
      }

      if (cardsFliped == 2) {
        cardsFliped = 0
        if (
          firstCard.children[0].style.backgroundColor !=
          card.children[0].style.backgroundColor
        ) {
          cMistakes += 1
          mistakes.innerText = `mistakes: ${cMistakes}`
          setTimeout(() => {
            flip(card)
            flip(firstCard)
            card.removeAttribute("disabled")
            firstCard.removeAttribute("disabled")
          }, 500)

          // card.toggleAttribute("disabled")
        } else {
          numOfCells -= 2
          card.setAttribute("disabled", true)
          firstCard.setAttribute("disabled", true)
        }
      }
      if (numOfCells == 0) {
        message.innerText = "you have won WOOHOO!"
        cWins += 1
        wins.innerText = `wins: ${cWins}`
      }
    })
  })
}

const makeCards = (rows, columns) => {
  message.innerText = ""
  main.innerHTML = ""
  cMoves = 0
  moves.innerText = `moves: ${cMoves}`
  cMistakes = 0
  mistakes.innerText = `mistakes: ${cMistakes}`
  let cells = rows * columns
  numOfCells = cells
  //sizing
  hSize = "calc(100% /" + rows + ")"
  wSize = "calc(100% /" + columns + ")"

  hS = "calc(100vh /" + rows + ")"
  wS = "calc(100vw /" + columns + ")"

  for (let index = 0; index < cells / 2; index++) {
    const color = randomColor()
    colors.push(color)
    colors.push(color)
  }
  for (let index = 0; index < cells; ) {
    const button = document.createElement("button")
    let num = randomNumber(cells)
    button.classList.add("card")

    button.innerHTML = `<div value="${colors[num]}" class="front"></div>  `

    //button.style.backgroundColor = colors[num]
    colors.splice(num, 1)
    cells--

    // adjusting the size of the cards
    button.setAttribute("style", "width: " + wSize + "; height: " + hSize)
    button.children[0].setAttribute("style", "width: " + wS + "; height: " + hS)

    main.append(button)
  }
  makeEventListener()
}

const flip = (card) => {
  if (card.children[0].className == "front") {
    card.children[0].className = "back"
    card.children[0].style.backgroundColor =
      card.children[0].getAttribute("value")
  } else {
    card.children[0].className = "front"
    card.children[0].style.backgroundColor = ""
  }
}
async function doThis(fn) {
  await setTimeout(fn, 500)
}

//starting the game
//making event listener to restart
restart.addEventListener("click", () => {
  makeCards(numRows.value, numColumns.value)
})
numRows.addEventListener("change", () => {
  makeCards(numRows.value, numColumns.value)
})
numColumns.addEventListener("change", () => {
  makeCards(numRows.value, numColumns.value)
})
////////////// make cards
makeCards(2, 2)
