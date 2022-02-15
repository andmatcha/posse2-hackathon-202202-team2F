const gBox = document.getElementById('g_box');
const gPlaytBtn = document.getElementById('g_play_button');
const gDisp = document.getElementById('g_display');
const gWordsBox = document.getElementById('g_words_box');
const gTimeBox = document.getElementById('g_time_box');
const gScoreBox = document.getElementById('g_score_box');
let gAgainBtn;

const LIMIT = 30;

let questionIndex = 0;
let gWordCount = 0;
let gWrongKeyCount = 0;
let startedTime;
let gSec;
let gTimerId;
let gScore;

const gWordsArr = ['apple', 'orange', 'banana', 'strawberry', 'grape', 'peach'];
function gSplitWord() {
    gWordsArr.forEach((word, wordIndex) => {
        const letters = [...word];
        letters.forEach((letter, index) => {
            letters[index] = `<span id="g_letter${index}">${letter}</span>`; //表示されている文字列を1文字ずつにわけて全て大文字にし、spanタグで囲む
        });
        gWordsArr[wordIndex] = letters.join('');
    });
}
gSplitWord();


function gFinish(judge) {
    gScore = gWordCount * Math.round(gSec / 5) - gWrongKeyCount;

    gWordsBox.innerText = '';
    gTimeBox.innerText = '';
    gScoreBox.innerHTML = '';
    if (judge === 'fail') {
        gScoreBox.insertAdjacentText('afterbegin', 'GAME OVER');
    } else {
        window.clearInterval(gTimerId);
        gScoreBox.insertAdjacentHTML('afterbegin', 'FINISH!!');
    }

    gScoreBox.insertAdjacentHTML('beforeend', `<p> Score: ${gScore} <br> Miss: ${gWrongKeyCount} </p>`);
    gScoreBox.insertAdjacentHTML('beforeend', `<p id="g_play_again" class="game-play-again">Play Again</p>`);
    gAgainBtn = document.getElementById('g_play_again');
    gAgainBtn.addEventListener('click', () => {
        gWordsBox.innerText = '';
        gTimeBox.innerText = '';
        gScoreBox.innerHTML = '';
        gPlaytBtn.style.display = 'block';
        gDisp.style.display = 'none';
        gBox.classList.remove('game-box-playing');
    });
}

////タイピングに関わる部分//////////////////////////////////////////
function gKeyAction(e) {
    const letterLength = gWordsBox.childElementCount;
    for (let letterIndex = 0; letterIndex < letterLength; letterIndex++) {
        const letter = document.getElementById(`g_letter${letterIndex}`);
        if (letter.classList.contains('game-correct-key')) {
            continue;
        }
        if (e.key === letter.innerText) {
            letter.classList.add('game-correct-key');
            if (letterIndex === letterLength - 1) {
                gWordCount++;
                gShowWord();
                return;
            }
        } else {
            gWrongKeyCount++;
        }
        return;
    }
}

document.addEventListener('keypress', gKeyAction);


////playボタン押下時の動作//////////////////////////////////////////
function gChangeStyle() {
    gPlaytBtn.style.display = 'none';
    gDisp.style.display = 'block';
    gBox.classList.add('game-box-playing');
}

function gShowWord() {
    if (questionIndex >= gWordsArr.length) {
        gFinish();
        return;
    }
    gWordsBox.innerHTML = gWordsArr[questionIndex];
    questionIndex++;
}

function gTimer() {
    if (gSec < 1) {
        window.clearInterval(gTimerId);
        gFinish('fail');
        return;
    }
    const now = new Date();
    gSec = (startedTime.getTime() + LIMIT * 1000 - now.getTime()) / 1000;
    gTimeBox.innerText = Math.ceil(gSec);
}

gPlaytBtn.addEventListener('click', () => {
    gSec = LIMIT;
    questionIndex = 0;
    gWordCount = 0;
    gWrongKeyCount = 0;

    gChangeStyle();
    gShowWord();

    startedTime = new Date();
    gTimer();
    gTimerId = window.setInterval(gTimer, 1000);
});
