//Function to store scores in LocalStorage
function store(){
    var correctAnswer = document.getElementById('correctAnswerId').value;
    var scoreKey = document.getElementById('scoreKeyId').value;
    
    console.log(correctAnswer);
    const score = {
        correctAnswer: correctAnswer,
        totalScore: correctAnswer * 10,
    }

    window.localStorage.setItem(scoreKey, JSON.stringify(score));

}

//Fuction to retrieve score from LocalStorage
function retrieve(){

     var retrieveKey = document.getElementById('retrieveKeyId').value;
     var scoreRecords = JSON.parse(window.localStorage.getItem(retrieveKey));
     var para = document.createElement("p");                     //created paragraph element
     var info = document.createTextNode("Your score is : \t"+ scoreRecords.totalScore);
     para.appendChild(info);   
     var element = document.getElementById('retrieveClass');  
     element.appendChild(para); 

}


/*-------- working only on refreshing page -----------------------------

window.onload = function(){
    document.getElementById('scoreFormId').onclick = store(); 
}

--------------------------------------------------------------*/

