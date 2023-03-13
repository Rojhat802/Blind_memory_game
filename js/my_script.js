const content = {
  
  sixteen_cards_Words: [
    ["<img id='Wcow' src='./images/audio_file.svg' />", "match1"],
    ["<img id='cow' src='./images/audio_file.svg' />", "match1"],
    ["<img id='Wduck' src='./images/audio_file.svg' />", "match2"],
    ["<img id='duck' src='./images/audio_file.svg' />", "match2"],
    ["<img id='Welephant' src='./images/audio_file.svg' />", "match3"],
    ["<img id='elephant' src='./images/audio_file.svg' />", "match3"],
    ["<img id='Wfrog' src='./images/audio_file.svg' />", "match4"],
    ["<img id='frog' src='./images/audio_file.svg' />", "match4"],
    ["<img id='Wchicken' src='./images/audio_file.svg' />", "match5"],
    ["<img id='chicken' src='./images/audio_file.svg' />", "match5"],
    ["<img id='Whorse' src='./images/audio_file.svg' />","match6"],
    ["<img id='horse' src='./images/audio_file.svg' />","match6" ],
    ["<img id='Wdog' src='./images/audio_file.svg' />", "match7"],
    ["<img id='dog' src='./images/audio_file.svg' />", "match7"],
    ["<img id='Wsheep' src='./images/audio_file.svg' />", "match8"],
    ["<img id='sheep' src='./images/audio_file.svg' />", "match8"]
  ],
  twelve_cards_Words: [
    ["<img id='Wcow' src='./images/audio_file.svg' />", "match1"],
    ["<img id='cow' src='./images/audio_file.svg' />", "match1"],
    ["<img id='Wduck' src='./images/audio_file.svg' />", "match2"],
    ["<img id='duck' src='./images/audio_file.svg' />", "match2"],
    ["<img id='Welephant' src='./images/audio_file.svg' />", "match3"],
    ["<img id='elephant' src='./images/audio_file.svg' />", "match3"],
    ["<img id='Wfrog' src='./images/audio_file.svg' />", "match4"],
    ["<img id='frog' src='./images/audio_file.svg' />", "match4"],
    ["<img id='Wchicken' src='./images/audio_file.svg' />", "match5"],
    ["<img id='chicken' src='./images/audio_file.svg' />", "match5"],
    ["<img id='Wcat' src='./images/audio_file.svg' />", "match6"],
    ["<img id='cat' src='./images/audio_file.svg' />", "match6"],
  ],
  sixteen_cards_Sounds: [
    ["<img id='cow' src='./images/audio_file.svg' />", "match1"],
    ["<img id='cow' src='./images/audio_file.svg' />", "match1"],
    ["<img id='duck' src='./images/audio_file.svg' />", "match2"],
    ["<img id='duck' src='./images/audio_file.svg' />", "match2"],
    ["<img id='elephant' src='./images/audio_file.svg' />", "match3"],
    ["<img id='elephant' src='./images/audio_file.svg' />", "match3"],
    ["<img id='frog' src='./images/audio_file.svg' />", "match4"],
    ["<img id='frog' src='./images/audio_file.svg' />", "match4"],
    ["<img id='chicken' src='./images/audio_file.svg' />", "match5"],
    ["<img id='chicken' src='./images/audio_file.svg' />", "match5"],
    ["<img id='horse' src='./images/audio_file.svg' />","match6"],
    ["<img id='horse' src='./images/audio_file.svg' />","match6" ],
    ["<img id='dog' src='./images/audio_file.svg' />", "match7"],
    ["<img id='dog' src='./images/audio_file.svg' />", "match7"],
    ["<img id='sheep' src='./images/audio_file.svg' />", "match8"],
    ["<img id='sheep' src='./images/audio_file.svg' />", "match8"]
  ],
  twelve_cards_Sounds: [
    ["<img id='cow' src='./images/audio_file.svg' />", "match1"],
    ["<img id='cow' src='./images/audio_file.svg' />", "match1"],
    ["<img id='duck' src='./images/audio_file.svg' />", "match2"],
    ["<img id='duck' src='./images/audio_file.svg' />", "match2"],
    ["<img id='elephant' src='./images/audio_file.svg' />", "match3"],
    ["<img id='elephant' src='./images/audio_file.svg' />", "match3"],
    ["<img id='frog' src='./images/audio_file.svg' />", "match4"],
    ["<img id='frog' src='./images/audio_file.svg' />", "match4"],
    ["<img id='chicken' src='./images/audio_file.svg' />", "match5"],
    ["<img id='chicken' src='./images/audio_file.svg' />", "match5"],
    ["<img id='horse' src='./images/audio_file.svg' />","match6"],
    ["<img id='horse' src='./images/audio_file.svg' />","match6" ],
  ],
};

let menuSelection;
let timer;
let centiseconds = 00;
let seconds = 0;
let minutes = 0;
let timerGoing = true;
let bestTimes = [];
let score = 0;
let strikes = 0;
let cardPicks = [];
let counter=0;
const MapForKeys= new Map();
MapForKeys.set(1,1);
MapForKeys.set(2,2);
MapForKeys.set(3,3);
MapForKeys.set(4,4);
MapForKeys.set(5,5);
MapForKeys.set(6,6);
MapForKeys.set(7,7);
MapForKeys.set(8,8);
MapForKeys.set(9,9);
MapForKeys.set(10,'r');
MapForKeys.set(11,'t');
MapForKeys.set(12,'y');
MapForKeys.set(13,'u');
MapForKeys.set(14,'o');
MapForKeys.set(15,'a');
MapForKeys.set(16,'s');




/*============================================
          Audio - Sound effects
============================================*/
const gameAudio = {
  twentysec: new Audio('audio/twentysec.mp3'),
  fortysec: new Audio('audio/fortysec.mp3'),
  sixtysec: new Audio('audio/sixtysec.mp3'),
  eightysec: new Audio('audio/eightysec.mp3'),
  hundredsec: new Audio('audio/hundredsec.mp3'),
    PlayGame: new Audio('audio/Playgame.mp3'),
    clickCard: new Audio('audio/click.mp3'),
    rightAnswer: new Audio('audio/RightCards.mp3'),
    wrongAnswer: new Audio('audio/wrong.mp3'),
    Final_Attempt: new Audio('audio/Final_Attempt.mp3'),
    Five_Attempt: new Audio('audio/Five_Strikes.mp3'),
    empty: new Audio('audio/empty.mp3'),
    winningSound: new Audio('audio/winner.mp3'),
    losingSound: new Audio('audio/loser.mp3'),
    animals: {
      chicken: new Audio('audio/animals/chicken.mp3'),
      cow: new Audio('audio/animals/cow.mp3'),
      duck: new Audio('audio/animals/duck.mp3'),
      elephant: new Audio('audio/animals/elephant.mp3'),
      goat: new Audio('audio/animals/goat.mp3'),
      dog: new Audio('audio/animals/dog.mp3'),
      horse: new Audio('audio/animals/horse.mp3'),
      frog: new Audio('audio/animals/frog.mp3'),
      sheep: new Audio('audio/animals/sheep.mp3'),
      wolf: new Audio('audio/animals.wolf.mp3'),
      cat: new Audio('audio/animals.cat.mp3'),
      Wchicken: new Audio('audio/animals/word_CHICKEN.mp3'),
      Wcow: new Audio('audio/animals/word_COW.mp3'),
      Wdog: new Audio('audio/animals/word_DOG.mp3'),
      Wduck: new Audio('audio/animals/word_DUCK.mp3'),
      Welephant: new Audio('audio/animals/word_ELEPHANT.mp3'),
      Wfrog: new Audio('audio/animals/word_FROG.mp3'),
      Wgoat: new Audio('audio/animals/word_GOAT.mp3'),
      Whorse: new Audio('audio/animals/word_HORSE.mp3'),
      Wsheep: new Audio('audio/animals/word_SHEEP.mp3'),
      Wwolf: new Audio('audio/animals/word_WOLF.mp3'),
      Wcat: new Audio('audio/animals/word_CAT.mp3'),

    }
};

const playClickCard = () => gameAudio.clickCard.play();
const playRightAnswer = () => gameAudio.rightAnswer.play();
const playWrongAnswer = () => strikes != 9 ? gameAudio.wrongAnswer.play() : gameAudio.Final_Attempt.play(); 
const playWinnerSound = () => gameAudio.winningSound.play();
const playLoserSound = () => gameAudio.losingSound.play();
const handleAudio = (event) => {
  (event === undefined || event === "") ?
    gameAudio.clickCard.play()
    :
    gameAudio.animals[`${event}`].play()
}



/*============================================
          Select Menu for Content
============================================*/
$('#menu').on("change", function(event) {
  menuSelection = content[event.target.value];
});


/*============================================
      Play / Reset to Shuffle Content
============================================*/
// Click Play Button to reset values and trigger Shuffle
$('.play-btn').on('click', (event) => {
    if (menuSelection == undefined) {
      alert('Please Select  your desired game mode.');
    } else { 
      $('.play-btn').addClass('hide'); // hides Play button
      $('.reset-btn').removeClass('hide'); // shows Reset button
      resetGame();
      shuffle(menuSelection); // shuffles content, makes gameboard and starts timer
    }
});

$('.reset-btn').on('click', (event) => {
  $('.reset-btn').addClass('hide');
  $('.play-btn').removeClass('hide');
  resetGame(); // resets gameboard values BUT doesn't start Timer
});

// Click Play Again Button on Modal Window
$('.play-again-btn').on('click', (event) => {
  resetGame();
  shuffle(menuSelection);
  

});
//Testing buttons for each of the sounds
$('.test-sound-btn').on('click', (event) => {
  gameAudio.wrongAnswer.play()
});
$('.test-sound-btn-lose').on('click', (event) => {
  gameAudio.losingSound.play()
});
$('.test-sound-btn-correct').on('click', (event) => {
  gameAudio.rightAnswer.play()
});
$('.test-sound-btn-won').on('click', (event) => {
  gameAudio.winningSound.play()
});


// Using Fisher-Yates method
function shuffle(array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  makeGameBoard(array);
}


/*============================================
            Add Content to DOM
============================================*/

const makeGameBoard = (someContent) => {
 
  
  $('#gameboard').empty();

 
  someContent.map((word, index) => {
    counter+=1
    $('#gameboard').append(
      `<div class="square">
        <div class="card-cover" aria-hidden="true" aria-roledescription="card number ${counter}"  accesskey="${MapForKeys.get(counter)}"></div>
        <div class="${word[1]}"><span class="span-for-content">${word[0]}</span></div>
       </div>`);
  });
  // Start timer
  timeHandler();
};



const timeHandler = () => {
  return timerGoing ? (
    timer = setInterval(timeCounter, 100)
  ) : (
    clearInterval(timer)
  );
};

const timeCounter = () => {
    let increment = centiseconds++;

    if (centiseconds > 9 && seconds >= 59) {
      minutes += 1;
      seconds = 0;
      centiseconds = 0;
    }
    if (centiseconds>9 &&seconds==0){
      gameAudio.PlayGame.play();
    }
    if (centiseconds>9 &&seconds==19){
      gameAudio.twentysec.play();
    }
    if (centiseconds>9 &&seconds==39){
      gameAudio.fortysec.play();
    }
    if(centiseconds>9 && seconds==59){
      gameAudio.sixtysec.play();
    }
    if(centiseconds && seconds== 79){
      gameAudio.eightysec.play();
    }
    if(centiseconds>9 && seconds==99){
      gameAudio.hundredsec.play();
    }
      if (centiseconds > 9) {
      seconds += 1;
      centiseconds = 0;
    }
    return $('#time').html(`<span>${minutes}:${seconds}:${centiseconds}</span>`)
};

const stopTimer = () => {
  timerGoing = false;
  timeHandler();
};


const handlePicks = (event) => {
  handleAudio(event.target.nextElementSibling.children[0].firstChild.id);
  $(event.target).addClass('card-show');
  let pick = $(event.target).siblings("div").attr('class');
  $(event.target).prop( "disabled", true );
  cardPicks.push(pick);

  if (cardPicks.length === 2) {
    setTimeout(decideMatch, 650, cardPicks);
  }
};

const changeScore = () => {
  score += 10;
  return $('#score').html(score);
};

const changeStrikes = () => {
  strikes += 1;
  return $('#strikes').html(strikes);
};

const hideCardsAgain = (cardPicksArr) => {
  $(`div.${cardPicksArr[0]}, div.${cardPicksArr[1]}`).siblings('div.card-cover').removeClass('card-show');
};

const makeCardsInactive = (cardPicksArr) => {
  $(`div.${cardPicksArr[0]}, div.${cardPicksArr[1]}`).siblings('div.card-cover').prop( "disabled", true );
};

const emptyCardPicks = arr => cardPicks.splice(0, cardPicks.length)

const decideMatch = (cardPicksArr) => {
    
    if (cardPicksArr[0] === cardPicksArr[1]) {
      makeCardsInactive(cardPicks);
      changeScore();
      if (menuSelection= content['twelve_cards_Sounds'] ||['twelve_cards_Words']){

        score === 60 ? wonGame() : playRightAnswer();

      }
      else{ score === 80 ? wonGame() : playRightAnswer(); // audio effect

      }
      emptyCardPicks();
  } 
 
  else {
    // Re-enable the cards picked so they're back in play again
     $('div.card-cover').prop( "disabled", false );
       changeStrikes();
       hideCardsAgain(cardPicks);
       strikes === 10 ? lostGame() : playWrongAnswer(); // audio effect
       emptyCardPicks();
  }
};

// Event listener to pick cards
$("#gameboard").on('click', 'div.card-cover', handlePicks);


/*============================================
              WINNING and LOSING
============================================*/
const wonGame = () => {
  stopTimer();
  playWinnerSound();
  // Disable game board
  $('#gameboard, div.card-cover').prop( "disabled", true );
  // show modal window with totals + Play Again button;
  judgeScore(seconds, centiseconds);
  showResults();
};

const showResults = () => {
  $('.results').addClass('show-results');
  $('#win-time').html(`Your Time: <span>${minutes} min. ${seconds}.${centiseconds} seconds</span>`);
  $('main').on('click', () => $('.results').removeClass('show-results'));
};

const lostGame = () => {
  playLoserSound();
  showLoserX();
  // Disable game board
  $('#gameboard, div.card-cover').prop( "disabled", true );
  stopTimer();
};

const showLoserX = () => {
  $('#loser-x').css('display', 'flex').fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500);
};


/*============================================
              TOP 5 WINNERS BOARD
============================================*/
const judgeScore = (seconds, centiseconds) => {
  let totalSeconds = (minutes * 60) + seconds;
  let time = parseFloat(`${totalSeconds}.${centiseconds}`);
  const sortTimes = (a, b) => a - b

  // Would be 'Null' if bestTimes hasn't been created in LocalStorage yet
  if (localStorage.getItem("bestTimes") == null) {
    bestTimes.push(time); // add to global array 'bestTimes'
    localStorage.setItem("bestTimes", JSON.stringify(bestTimes)); // add to LocalStorage
    displayTopTimes()
  } else if (localStorage.getItem("bestTimes")) {
    bestTimes = JSON.parse(localStorage.getItem("bestTimes"));
        if (bestTimes.length != 5) {
          bestTimes.push(time);
          bestTimes.sort(sortTimes); // Sorted fastest to slowest time
          localStorage.setItem("bestTimes", JSON.stringify(bestTimes));
        } else if (bestTimes.length === 5 && time < bestTimes[bestTimes.length-1]) {
            bestTimes.splice(bestTimes.length-1, 1, time); // Replaces last array element
            bestTimes.sort(sortTimes);
            localStorage.setItem("bestTimes", JSON.stringify(bestTimes));
        }
    displayTopTimes()
  }
};

const displayTopTimes = () => {
  console.log(bestTimes);
  const displayTimesArray = [];
  console.log(displayTimesArray);
  bestTimes.forEach(bestTime => {
    if (bestTime > 60) {
      let mins = Math.floor(bestTime / 60)
      let secs = (bestTime - 60).toFixed(1);
      let displayTime = `${mins} min. ${secs} seconds`;
      displayTimesArray.push(displayTime);
    } else {
      let displayTime = `${bestTime} seconds`;
      displayTimesArray.push(displayTime);
    }
  });
  switch(bestTimes.length) {
    case 2:
      $('#first').html(`<span>${displayTimesArray[0]}</span>`);
      $('#second').html(`<span>${displayTimesArray[1]}</span>`);
      break;
    case 3:
      $('#first').html(`<span>${displayTimesArray[0]}</span>`);
      $('#second').html(`<span>${displayTimesArray[1]}</span>`);
      $('#third').html(`<span>${displayTimesArray[2]}</span>`);
      break;
    case 4:
      $('#first').html(`<span>${displayTimesArray[0]}</span>`);
      $('#second').html(`<span>${displayTimesArray[1]}</span>`);
      $('#third').html(`<span>${displayTimesArray[2]}</span>`);
      $('#fourth').html(`<span>${displayTimesArray[3]}</span>`);
      break;
    case 5:
      $('#first').html(`<span>${displayTimesArray[0]}</span>`);
      $('#second').html(`<span>${displayTimesArray[1]}</span>`);
      $('#third').html(`<span>${displayTimesArray[2]}</span>`);
      $('#fourth').html(`<span>${displayTimesArray[3]}</span>`);
      $('#fifth').html(`<span>${displayTimesArray[4]}</span>`);
      break;
    default:
      $('#first').html(`<span>${displayTimesArray[0]}`);
      break;
  }
}


/*============================================
                  RESET GAME
============================================*/
const resetGame = () => {
  score = 0;
  strikes = 0;
  centiseconds = 0;
  seconds = 0;
  minutes =  0;
  timerGoing = true;


  clearInterval(timer);
 
  $('#time').html(`<span>${minutes}:${seconds}:${centiseconds}</span>`);
  $('#score').html(score);
  $('#strikes').html(strikes);
  $('.results').removeClass('show-results');
  $('.card-cover').removeClass('card-show');

};
