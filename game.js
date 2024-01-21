const main = document.querySelector("main")
const restart = document.querySelector(".restart")
const numRows = document.querySelector(".rows")
const numColumns = document.querySelector(".columns")
//const cards = document.querySelectorAll(".card")
let cardsFliped = 0
let firstCard = undefined
const colors = []

const randomColor = () => {
  return "#" + parseInt(Math.random() * 1000000)
}
const randomNumber = (num) => {
  return parseInt(Math.random() * 1000000) % num
}

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
          setTimeout(() => {
            flip(card)
            flip(firstCard)
            card.removeAttribute("disabled")
            firstCard.removeAttribute("disabled")
          }, 500)

          // card.toggleAttribute("disabled")
        } else {
          card.setAttribute("disabled", true)
          firstCard.setAttribute("disabled", true)
        }
      }
    })
  })
}

const makeCards = (rows, columns) => {
  main.innerHTML = ""
  let cells = rows * columns

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
makeCards(9, 9)

// making event listener to each card
