function choosePred () {
var predictions = ["A beautiful, smart, and loving person will be coming into your life", 
    "A faithful friend is a strong defense",
    "Because you demand more from yourself, others respect you deeply",
    "Believe it can be done",
    "Courtesy is contagious",
    "Curiosity kills boredom. Nothing can kill curiosity",
    "Dedicate yourself with a calm mind to the task at hand",
    "Depart not from the path which fate has you assigned",
    "Your difficulties will strengthen you",
    "Your dreams are never silly; depend on them to guide you",
    ];
    
    var yourPrediction = predictions[Math.round(Math.random()*(predictions.length - 1))];
    document.getElementById('good_words').innerHTML = "<div>" + yourPrediction + "</div>" 
}