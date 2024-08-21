console.log('app loaded')

let gameScore = 0
let awayScore = 0



// NOTE home plus one score board
function scoreHome() {
    const scoreElement = document.getElementById('home-score')
    console.log(scoreElement, scoreElement.innerText);
    scoreElement.innerText = gameScore
}

// NOTE Away plus one score board
function scoreAway() {
    const scoreElement = document.getElementById('away-score')
    console.log(scoreElement, scoreElement.innerText);
    scoreElement.innerText = awayScore
}



// NOTE home plus one button
function homeBtn() {
    gameScore += 1
    console.log('score 0', gameScore);
    scoreHome()


}

// NOTE home plus three button
function homeThreeBtn() {
    gameScore += 3
    console.log('score 0', gameScore);
    scoreHome()

}


// NOTE Away plus one button
function awayBtn() {
    awayScore += 1
    console.log('score 0', awayScore);
    scoreAway()
}

// NOTE Away plus one button
function awayThreeBtn() {
    awayScore += 3
    console.log('score 0', awayScore);
    scoreAway()
}

function reset() {
    gameScore = 0
    awayScore = 0
    console.log('score 0', gameScore);
    scoreHome()
    scoreAway()
}