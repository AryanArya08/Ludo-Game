'use strict';
const score0el = document.querySelector('#score--0');
const score1el = document.getElementById('score--1');
const current0el = document.getElementById('current--0');
const current1el = document.getElementById('current--1');
const diceel = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');
score0el.textContent = 0;
score1el.textContent = 0;
let scores = [0, 0];
let currentscore = 0;
let activeplayer = 0;
let playing = true;
//switching the palyer
const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentscore = 0;
  player0el.classList.toggle('player--active');
  player1el.classList.toggle('player--active');
};
const init = function () {
  scores = [0, 0];
  currentscore = 0;
  activeplayer = 0;
  playing = true;
  diceel.classList.add('hidden');
  score0el.textContent = 0;
  score1el.textContent = 0;
  current0el.textContent = 0;
  current1el.textContent = 0;
  player0el.classList.remove('palyer--winner');
  player1el.classList.remove('palyer--winner');
  player1el.classList.remove('player--active');
  player0el.classList.add('player--active');
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove('player--winner');
};
init();

diceel.classList.add('hidden');
btnRoll.addEventListener('click', function () {
  //Generating the dice
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //Display Dice
    diceel.classList.remove('hidden');
    diceel.src = `dice-${dice}.png`;

    //check the number if number=1 ,switch the palyer
    if (dice !== 1) {
      //add dice to current scoreadd the dicew ethe
      currentscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      //switching the palyer
      switchplayer();
    }
  }
});
btnhold.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 20) {
      playing = false;
      diceel.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else switchplayer();
  }
});
btnnew.addEventListener('click', init);
