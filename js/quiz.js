'use strict';

let questionsArray = ['Aplologize', 'wedding', 'first date', 'marriage', 'Welcome home party',
    'wedding', 'Birth', 'First date', 'love', 'friends birthday', 'present admiration', 'ingagement'
    , 'marriage', 'patient', 'welcome home party', 'love', 'given in birth', 'given to the love', 'welcome home party', 'first date'];
let imgesArray = ['./assets/bouquet_PNG3.png', './assets/bouquet_PNG46.png', './assets/bouquet_PNG39.png', './assets/bouquet_PNG17.png', './assets/bouquet_PNG56.png'];
let questionContent = ['In which occasion would you give yellow flowers?',
    'What is the best situation to give red flowers?',
    'when to give orange flowers as a gift?',
    'in which occasion would you present pink flowers?',
    'which is the best answer a bout white flowers?'];
let correctAnswersPositions = [0, 7, 10, 12, 16];
let currentQuestion = 0;
let score = 0;
let checkQuestion = false;
let displayQuestionToHtml = function () {

    checkQuestion = false;
    document.querySelector('#form').innerHTML = '';

    document.querySelector('#img').src = imgesArray[currentQuestion];
    document.querySelector('#question').textContent = questionContent[currentQuestion];

    for (let i = currentQuestion * 4; i <= currentQuestion * 4 + 3; i++) {
        document.querySelector('#img').textContent = '';

        if (correctAnswersPositions[currentQuestion] === i) {
            document.querySelector('#form').insertAdjacentHTML('afterbegin', `    
    <input required onclick='checkQuestions()' type='radio' id='A${i}' name='A' value='${1}'>
    <label for='A${i}'>${questionsArray[i]}</label><br>`);
        } else {
            document.querySelector('#form').insertAdjacentHTML('afterbegin', `    
    <input required onclick='checkQuestions()' type='radio' id='A${i}' name='A' value='${0}'>
    <label for='A${i}'>${questionsArray[i]}</label><br>`);
        }


    }

    if (currentQuestion == 4)
        document.querySelector('#submit').value = `Submit`;
    else
        document.querySelector('#submit').value = `Next`;
    currentQuestion++;


};//


let setEventToSubmit = function () {

    document.querySelector('#submit').addEventListener('click', function (event) {
        event.preventDefault();
        if (!checkQuestion) {
            document.querySelector('#submit').value = `Please Select An Answer`;
            return;
        }
        if (currentQuestion == 5) {

            checkQuestions(currentQuestion);

            document.querySelector('.popup').style.display = `block`;
            document.querySelector('.popup').innerHTML += `<p>You get ${score} score</p>`;
            document.querySelector('.popup').innerHTML += '<p><a href="./quiz.html">Take it again?</a></p>';

            document.querySelector('.popup').src = './assets/bouquet_PNG21.png';


            // document.querySelector('#question').innerHTML='<a href="./quiz.html">Take it again?</a>';
            // document.querySelector('#form').innerHTML = `You get ${score} score`;
            document.querySelector('#img').src = './assets/bouquet_PNG21.png';
            document.querySelector('#submit').style.display = `none`;

            return;
        }

        checkQuestions(currentQuestion);

        displayQuestionToHtml();
    });

};

let checkQuestions = function (currentQuestion) {


    for (let i = (currentQuestion - 1) * 4; i <= (currentQuestion - 1) * 4 + 3; i++) {


        if (document.querySelector(`#A${i}`).checked) {
            score += Number(document.querySelector(`#A${i}`).value);
        }
    }



    checkQuestion = true;
}

displayQuestionToHtml(); setEventToSubmit();