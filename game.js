const main = document.querySelector("main")
const card = document.querySelector(".flip-card-inner")
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

card.addEventListener("click", () => {
  card.style.transform = "rotateX(180deg)"
})
