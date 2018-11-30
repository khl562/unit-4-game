$(document).ready(function() {

    var gameNumber = gameNum(19, 120);
    var wins = 0
    var losses = 0
    var totalScore = 0
    
    function gameNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    };
    
    $('#game-num').text(gameNumber)
    $('#wins').text(wins)
    $('#losses').text(losses)
    $('#user-score').text(totalScore)
    
    function generateRandomNumbers() {
        return Math.floor(Math.random() * (12) + 1)
    }

    
    var button1 = generateRandomNumbers()
    var button2 = generateRandomNumbers()
    var button3 = generateRandomNumbers()
    var button4 = generateRandomNumbers()

    function newNumber () {
        button1 = generateRandomNumbers()
        button2 = generateRandomNumbers()
        button3 = generateRandomNumbers()
        button4 = generateRandomNumbers()
    }
    
    // var buttons =['btn1', 'btn2', 'btn3', 'btn4']

    // for (var i = 0; i < buttons.length; i++) {
    //     console.log(buttons[i] = Math.floor(Math.random() * (12) + 1))
    // }
    // console.log(buttons)

    $('#button1').on('click', function() {
    totalScore += button1
    $('#user-score').text(totalScore);
    checkScore();
    })
    
    $('#button2').on('click', function() {
    totalScore += button2
    $('#user-score').text(totalScore);
    checkScore()
    })
    
    $('#button3').on('click', function() {
    totalScore += button3
    $('#user-score').text(totalScore);
    checkScore()
    })
    
    $('#button4').on('click', function() {
    totalScore += button4
    $('#user-score').text(totalScore);
    checkScore()
    })
    
    // console.log the value so you know what the variables are
    console.log("total score is" + totalScore);
    console.log("game number is " + gameNumber);
    
    // if (totalScore > gameNumber) {
    // losses++; 
    // $('#losses').text(losses);
    // console.log("total score is greater than game number");
    // } else {
    // console.log("total score is less than game number");
    // }
    
    function checkScore() {
    if (totalScore > gameNumber) {
        losses++;
        $('#losses').text(losses);
        gameNumber = gameNum(19,120);
        $('#game-num').text(gameNumber);
        totalScore = 0;
        $('#user-score').text(totalScore);
        newNumber();
        button1 = generateRandomNumbers();
        button2 = generateRandomNumbers();
        button3 = generateRandomNumbers();
        button4 = generateRandomNumbers();
        console.log("total score is greater than game number");
    } else if (totalScore == gameNumber) {
        wins++;
        $('#wins').text(wins);
        gameNumber = gameNum(19,120);
        $('#game-num').text(gameNumber);
        totalScore = 0;
        $('#user-score').text(totalScore);
        newNumber();
        button1 = generateRandomNumbers();
        button2 = generateRandomNumbers();
        button3 = generateRandomNumbers();
        button4 = generateRandomNumbers();
        console.log("total score is less than game number");
    }
    }
    
    
    
    })