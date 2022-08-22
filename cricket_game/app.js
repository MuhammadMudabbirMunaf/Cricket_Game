var mainScore = ["0", "1", "2", "3", "4", "6"];
var random1 = Math.floor(Math.random(mainScore)* mainScore.length);
// console.log(random1);
var a = document.getElementById("score1");
// "Catch", "Bowled", "Stump", "LBW", "RunOut"
var b = document.getElementById("scoredisplay");

function nextball() {
    document.getElementById("nextball").value;
    b = nextball + a;
}