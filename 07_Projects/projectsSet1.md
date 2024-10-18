# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("Mayank")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```

## project 2 solution

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){ 
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height == '' || height < 0 || isNaN(height)){ 
    results.innerHTML = "Please enter a valid height"
  }
  else if(weight == '' || weight < 0 || isNaN(weight)){ 
    results.innerHTML = "Please enter a valid weight"
  }
  else{ 
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    if(bmi < 18.6){ 
      results.innerHTML = `<span>${bmi}</span> - You are underweight`
    }
    else if(bmi > 18.6 && bmi < 24.9){ 
      results.innerHTML = `<span>${bmi}</span> - You are normal`
    }
    else{ 
      results.innerHTML = `<span>${bmi}</span> - You are overweight`
    }
    
  }
});


```

## project 3 solution code

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## project 4 solution


```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true; // this variable is necessary when we are designing games.

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  });
}

// First we create a function where we will validate the guessed number
function validateGuess(guess) {  
// This is used a lot when we want to validate something either it could be an email or password etc.
  if(isNaN(guess)){ 
    alert("Please enter a valid number")
  }
  else if(guess < 1){ 
    alert("Please enter a greater number")
  }
  else if(guess > 100){ 
    alert("Please enter a smaller number")
  }
  else{ 
    prevGuess.push(guess);
    if(numGuess === 11){ 
      displayGuess(guess);
      displayMessage(`Game Over 😏😏. Random number was ${randomNumber}.`)
      endGame()
    }
    else{ 
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

// The second function we create is to check a number.
function checkGuess(guess) {
  if(guess === randomNumber){ 
    displayMessage(`You guessed it right 👍🏻`)
    endGame();
  }
  else if(guess < randomNumber){ 
    displayMessage(`Number is too low`)
  }
  else if(guess > randomNumber){ 
    displayMessage(`Number is too high`)
  }
}

//Third function we create is to display the guesses.
function displayGuess(guess) { 
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`
}

// Fourth function we create is to see the DOM Manipulation
function displayMessage(message) { 
  lowOrHi.innerHTML = `<h3>${message}</h3>`
}

// Games method - Start and end of a game
function endGame() { 
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false;
  newGame();
}

function newGame() { 
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){ 
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${10 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true
  });
};

```


# Project 5 solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

# Project 6 Solution

```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```