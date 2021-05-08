console.log("HTML connected");

const myJokes = [];
let currentJoke;

async function getDadJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
  const jokes = await response.json();
  console.log(jokes);
  currentJoke = jokes.joke;
  renderScreen(currentJoke);
}

function renderScreen(joke) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = joke;
  createList();
}

function createList() {
  let listLength = Math.min(5, myJokes.length);
  let ol = document.querySelector("ol");
  ol.innerHTML = "";
  for (let i = 0; i < listLength; i++) {
    let li = document.createElement("li");
    li.innerText = myJokes[i].joke;
    ol.appendChild(li);
  }
}
getDadJoke();

let rateButton = document.getElementById("rate");
rateButton.addEventListener("click", saveRating);

function saveRating() {
  let input = document.querySelector("input");
  let score = input.value;
  let jokeObject = {
    joke: currentJoke,
    score: score,
  };
  myJokes.push(jokeObject);
  myJokes.sort((a, b) => b.score - a.score);
//   createList();
  getDadJoke();
}
