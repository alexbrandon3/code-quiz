
var attempt = JSON.parse(localStorage.getItem("attempt")) || [];
//Logs initials and score to high score page
var scoreboard = document.getElementById("scoreboard");
if(!attempt[0]){
    var record = document.createElement('li');
    record.textContent = 'Be the first to play!';
    scoreboard.append(record);

}
else{
    for(var i = 0; i < attempt.length; i++){
        var {score, initials} = attempt[i];
        var record = document.createElement('li');
        record.textContent = initials + ' - ' + score;
        scoreboard.append(record);
    }
}


var clearScores = document.querySelector("#clear-btn");
clearScores.addEventListener("click", function(){
    localStorage.removeItem('attempt');
    window.location.replace("scores.html");
})