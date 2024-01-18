const main = document.querySelector("main")
const cards = document.querySelectorAll(".card")
let cardsFliped = 0
let firstCard = undefined

const makeCards = (rows, columns) => {
  main.innerHTML = ""

  // random stuff
  const results = response.data.results
  list.innerHTML = ""
  results.forEach((movie) => {
    const item = document.createElement("div")
    item.style.backgroundImage = `url(${IMAGE_BASE_PATH + movie.backdrop_path})`
    item.classList.add("item")

    //backdrop_path
    item.innerHTML = `<img src=${IMAGE_BASE_PATH + movie.poster_path}>
    <h1>${movie.original_title} (${movie.release_date.substring(0, 4)})</h1>
    <p>${movie.overview}</p>
    `
    list.append(item)
  })
}

const flip = (card) => {
  if (card.children[0].className == "front") {
    card.children[0].className = "back"
  } else {
    card.children[0].className = "front"
  }
}

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
        flip(card)
        flip(firstCard)
        card.setAttribute("disabled", false)
        card.setAttribute("disabled", false)
      } else {
        card.setAttribute("disabled", true)
        firstCard.setAttribute("disabled", true)
      }
    }

    //console.log(this.children[0])
    //card.style.transform = "rotateY(180deg)"
  })
})
