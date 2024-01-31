const main = document.querySelector("main")
const restart = document.querySelector(".restart")
const numRows = document.querySelector(".rows")
const numColumns = document.querySelector(".columns")
const message = document.querySelector(".message")

const wins = document.querySelector(".wins")
const moves = document.querySelector(".moves")
const mistakes = document.querySelector(".mistakes")
let cWins = 0
let cMoves = 0
let cMistakes = 0
let numOfCells = 4
let cardsFliped = 0
let firstCard = undefined
let colors = []

const randomColor = async (num) => {
  //return "#" + parseInt(Math.random() * 1000000)

  const response = await axios.get(
    `https://x-colors.yurace.pro/api/random?number=${num}`
  )
  const colorArray = response.data
  const newarr = []
  // const color = randomColor()
  // colorArray.forEach((c) => {
  //   newarr.push(c)
  //   newarr.push(c)
  // })

  colorArray.push(...colorArray)
  //console.log(colorArray)
  return colorArray
}
const randomNumber = (num) => {
  return parseInt(Math.random() * 1000000) % num
}

const match = (secondC, fc) => {
  setTimeout(() => {
    flip(secondC) //flip second card
    flip(fc) //flip first card
    fc.removeAttribute("disabled")
    secondC.removeAttribute("disabled")
  }, 500)
}

// making event listener to each card
makeEventListener = () => {
  let cards = document.querySelectorAll(".card")
  cards.forEach((card) => {
    card.addEventListener("click", () => {
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
          cMoves += 1
          moves.innerText = `moves: ${cMoves}`
          cMistakes += 1
          mistakes.innerText = `mistakes: ${cMistakes}`
          match(card, firstCard)
        } else {
          cMoves += 1
          moves.innerText = `moves: ${cMoves}`
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

const makeCards = async (rows, columns) => {
  if ((rows * columns) % 2 == 0 && rows * columns > 4) {
    message.innerText = ""
    main.innerHTML = ""
    cMoves = 0
    moves.innerText = `moves: ${cMoves}`
    cMistakes = 0
    mistakes.innerText = `mistakes: ${cMistakes}`
    let cells = rows * columns
    numOfCells = cells
    colors = []
    cardsFliped = 0
    // sizing
    hSize = "calc(100% /" + rows + ")"
    wSize = "calc(100% /" + columns + ")"
    hS = "calc(50vh /" + rows + ")"
    wS = "calc(100vw /" + columns + ")"
    // for (let index = 0; index < cells / 2; index++) {
    //   const color = randomColor()
    //   colors.push(color)
    //   colors.push(color)
    // }
    colors = await randomColor(cells / 2)

    console.log(colors)
    for (let index = 0; index < cells; ) {
      const button = document.createElement("button")
      let num = randomNumber(cells)
      button.classList.add("card")
      button.innerHTML = `<div value="${colors[num].rgb}" class="front"></div>  `
      colors.splice(num, 1)
      cells--
      // adjusting the size of the cards
      button.setAttribute("style", "width: " + wSize + "; height: " + hSize)
      button.children[0].setAttribute(
        "style",
        "width: " + wS + "; height: " + hS
      )
      main.append(button)
    }
    makeEventListener()
  }
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
makeCards(3, 4)
