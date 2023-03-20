var check = document.querySelector(".check")
var playAgain = document.querySelector(".playAgain")
var inputValue = document.querySelector(".number")
var score = document.querySelector(".score").innertext
var highScore = document.querySelector(".highScore").innertext
var answer = document.querySelector(".evaluation")
var message = document.querySelector(".message")
var body = document.querySelector("body")
var score = 20
var highScore = 0
//console.log(score)
//console.log(typeof (Number(score)))
//Alerting in case of out of range

check.addEventListener("click", function () {
  if (inputValue.value < 0 || Number(inputValue.value) > 20) {
    alert("Enter in range!")
  }
})


//in case of range
//random number generated 
var correctAnswer = Math.floor(Math.random() * 21)
console.log(correctAnswer)


//event listerner added again for messages


check.addEventListener("click", function () {


  if (correctAnswer == inputValue.value) {
    answer.innerHTML = inputValue.value;



    answer.style.color = "green"
    body.style.backgroundColor = "green"
    message.innerHTML = `Congrats`
    message.style.fontSize = "40px"
    score = score + 1;
    document.querySelector(".score").innerHTML = score
    if (score > highScore) {
      highScore = score
      document.querySelector(".highScore").innerHTML = highScore
    }





  } else if (correctAnswer > inputValue.value) {


    message.innerHTML = `Low try higher value`
    message.style.color = "blue"
    message.style.fontSize = "40px"
    body.style.backgroundColor = "red"
    score = score - 1;
    document.querySelector(".score").innerHTML = score
  } else if (correctAnswer < inputValue.value) {
    message.innerHTML = `high try lower value`
    message.style.color = "blue"
    body.style.backgroundColor = "red"
    message.style.fontSize = "40px"
    score = score - 1;
    document.querySelector(".score").innerHTML = score

  }


})



