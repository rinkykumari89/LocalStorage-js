//---Function to store scores in LocalStorage-------------------------------
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

//---Fuction to retrieve score from LocalStorage-------------------------------
function retrieve(){

     var retrieveKey = document.getElementById('retrieveKeyId').value;
     var scoreRecords = JSON.parse(window.localStorage.getItem(retrieveKey));

    //created paragraph element
     var para = document.createElement("p");                     
     var info = document.createTextNode("Your score is : \t"+ scoreRecords.totalScore);
     para.appendChild(info); 

     var element = document.getElementById('retrieveId');  
     element.appendChild(para); 

}

//-----Function to remove score from LocalStorage-------------------------------
function remove(){

    var removeKey = document.getElementById('removeKeyId').value;
    localStorage.removeItem(removeKey);

    //Created Paragraph element
    var para = document.createElement("p");
    var info = document.createTextNode("Score is Successfully deleted!");
    para.appendChild(info);

    var element = document.getElementById('removeId');
    element.appendChild(para);    
}

//-----Function to clear LocalStorage------------------------------------------------
function clearLocal(){
    localStorage.clear();

    //created Paragraph element
    var para = document.createElement("p");
    var info = document.createTextNode("Successfully cleared!");
    para.appendChild(info);

    var element = document.getElementById('clearId');
    element.appendChild(para);
}
