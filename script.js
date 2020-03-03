window.addEventListener("load", function(){

  document.getElementById("tryIt").addEventListener("click", eightBallTest);

  document.getElementById("reset").addEventListener("click", resetEightBall);

function eightBallTest () {

  let possibleReplies = [
      "It is certain", 
      "It is decidedly so", 
      "Without a doubt", 
      "Yes - definitely", 
      "You may rely on it", 
      "As I see it, yes", 
      "Most likely", 
      "Outlook good", 
      "Yes", 
      "Signs point to yes", 
      "Reply hazy, try again", 
      "Ask again later", 
      "Better not tell you now", 
      "Cannot predict now", 
      "Concentrate and ask again", 
      "Don't count on it", 
      "My reply is no", 
      "My sources say no", 
      "Outlook not so good", 
      "Very doubtful"];
  
  let randomReply = Math.floor(Math.random()*possibleReplies.length);
  let answer = document.getElementById("answer");
  
  if (input.value.length === 0) {
    alert("Please ask a question");
    } else {
        eight.innerHTML = "";
        answer.innerText = possibleReplies[randomReply]; 
    }
  };

});


function resetEightBall () { 
  eight.innerHTML = "8";
  document.getElementById('input').value = "";
  document.getElementById("answer").innerHTML = "";

};     





