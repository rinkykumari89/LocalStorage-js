console.log('started js');


var correctAnswer = document.getElementById('correctAnswerId').value;
console.log(correctAnswer);

//function to store scores
function store(){
    var correctAnswer = document.getElementById('correctAnswerId').value;
    var scoreKey = document.getElementById('scoreKeyId').value;
    
    console.log(correctAnswer);
    const score = {
        correctAnswer: correctAnswer,
        score: correctAnswer * 10,
    }

    window.localStorage.setItem(scoreKey, JSON.stringify(score));

}

//window.alert('how!');

window.onload = function(){
    document.getElementById('scoreFormId').addEventListener("onsubmit", function(){ alert("Hello World!"); }); 
}

