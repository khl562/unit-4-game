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
    
    // function generateRandomNumbers() {
    //     return Math.floor(Math.random() * (12) + 1)
    // }

    var button1 = Math.floor(Math.random() * (12) + 1)
    var button2 = Math.floor(Math.random() * (12) + 1)
    var button3 = Math.floor(Math.random() * (12) + 1)
    var button4 = Math.floor(Math.random() * (12) + 1)
    
    // var buttons =['btn1', 'btn2', 'btn3', 'btn4']

    // for (var i = 0; i < buttons.length; i++) {
    //     console.log(buttons[i] = Math.floor(Math.random() * (12) + 1))
    // }
    // console.log(buttons)

    $('#button1').on('click', function() {
    totalScore += but1
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
    var total = losses++;
    $('#losses').text(total);
    console.log("total score is greater than game number");
    } else {
    console.log("total score is less than game number");
    }
    }
    
    
    
    })