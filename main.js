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
}

function addToList() {
  let li = document.createElement("li");
}
getDadJoke();

let button = document.querySelector("button");
button.addEventListener("click", getDadJoke);

let rateButton = document.getElementById("rate");
rateButton.addEventListener("click", saveRating);

function saveRating() {
  let input = document.querySelector("input");
  let score = input.value;
  console.log(score);
  let jokeObject = {
    joke: currentJoke,
    score: score,
  };
  myJokes.push(jokeObject);
  myJokes.sort((a, b) => b.score - a.score);

  // save rating to pass on to sorting function
}

// step 1: get the dad joke
// step 2: add button to get new joke
// step 2: rank joke via text input
//          - make sure its an int
//          - bubble sort it
//          - rerender list with new sorted array
// step 3: add jokes to ul
