const main = document.querySelector("main")
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

const makeCards = (rows, columns) => {
  // not finished
  main.innerHTML = ""
  let cells = rows * columns

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
    main.append(button)
  }

  // random stuff
  //const results = response.data.results
  // main.innerHTML = ""
  // results.forEach((movie) => {
  //   const item = document.createElement("div")
  //   item.style.backgroundImage = `url(${IMAGE_BASE_PATH + movie.backdrop_path})`
  //   item.classList.add("item")

  //   //backdrop_path
  //   item.innerHTML = `<img src=${IMAGE_BASE_PATH + movie.poster_path}>
  //   <h1>${movie.original_title} (${movie.release_date.substring(0, 4)})</h1>
  //   <p>${movie.overview}</p>
  //   `
  //   main.append(item)
  // })
}

const flip = (card) => {
  if (card.children[0].className == "front") {
    card.children[0].className = "back"
    card.children[0].style.backgroundColor =
      card.children[0].getAttribute("value")
    console.log(card.children[0])
  } else {
    card.children[0].className = "front"
    card.children[0].style.backgroundColor = ""
  }
}

////////////// make cards
makeCards(4, 6)

// make event listener to each card
let cards = document.querySelectorAll(".card")
cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (cardsFliped == 0) {
      console.log(cardsFliped)
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
        //console.log()
        card.setAttribute("disabled", true)
        firstCard.setAttribute("disabled", true)
        console.log(card)
      }
    }

    //console.log(this.children[0])
    //card.style.transform = "rotateY(180deg)"
  })
})
