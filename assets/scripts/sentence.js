var inputBirthdayObject, inputBirthdayDate, inputBirthdayUserName, inputAdjective, inputGraduationObject, inputGraduationDate, inputGraduationUserName, inputGraduationAdjective, inputGraduationSchoolName, lifeEvent;
var message;
function getSynonyms(adjective) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://wordsapiv1.p.rapidapi.com/words/" + adjective + "/synonyms",
        "method": "GET",
        "headers": {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                "x-rapidapi-key": "c50b1c7ba4msh4237abf70ff49e2p1e5053jsnd1743f7dd918"
            }
        }
    return $.ajax(settings).done(function (response) {
    });
}
function generateSentence() {
    if (lifeEvent === "1"){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://linguatools-sentence-generating.p.rapidapi.com/realise?" + 
            "subject=happy birthday" + 
            "&verb=to" + 
            "&objdet=" + 
            "&object=" + inputBirthdayObject +
            "&objmod=" + 
            "&subjdet=" + 
            "&subjnum=plural",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "linguatools-sentence-generating.p.rapidapi.com",
                "x-rapidapi-key": "c50b1c7ba4msh4237abf70ff49e2p1e5053jsnd1743f7dd918"
            }
        }
    } else if (lifeEvent === "2") {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://linguatools-sentence-generating.p.rapidapi.com/realise?" + 
            "subject=ConGRADulation" + 
            "&verb=to" + 
            "&objdet=" + 
            "&object=" + inputGraduationObject +
            "&objmod=" + 
            "&subjdet=" + 
            "&subjnum=plural",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "linguatools-sentence-generating.p.rapidapi.com",
                "x-rapidapi-key": "c50b1c7ba4msh4237abf70ff49e2p1e5053jsnd1743f7dd918"
            }
        }
    }
    
    $.ajax(settings).done(function (response) {
        message = response.sentence;
        if (lifeEvent === "1"){
            var userAdjective = getSynonyms(inputBirthdayAdjective);
            userAdjective.then(function(json) {
                $("#message-area").append("<p>").text(message).append(" I can't believe it's " + inputBirthdayDate + " again. A whole year has passed by and it's just crazy. You are so " + json.synonyms[Math.floor(Math.random() * json.synonyms.length)] + ". Let's have another great one. From, " + inputBirthdayUserName);
            });
        } else if (lifeEvent === "2") {
            var userAdjective = getSynonyms(inputGraduationAdjective);
            userAdjective.then(function(json) {
                $("#message-area").append("<p>").text(message).append(" And to the Class of " + inputGraduationDate + "! I'm so proud of all you have accomplished. You are so " + json.synonyms[Math.floor(Math.random() * json.synonyms.length)] + ". " + inputGraduationSchoolName + "is in the past. The world is your oyster! Love, " + inputGraduationUserName);
            });
        }
    });
}
function enterWords() {
    event.preventDefault();
    $("#message-area").empty();

    lifeEvent = $("#life-event").val();
    if (lifeEvent === "1"){
        inputBirthdayObject = $("#birthday-name").val();
        inputBirthdayDate = $("#birthday-date").val();
        inputBirthdayAdjective = $("#birthday-adjective").val();
        inputBirthdayUserName = $("#birthday-user-name").val();
        if(inputBirthdayObject === "") {
            alert("Please enter a valid reciever name.");
        } else if (inputBirthdayDate === "") {
            alert("Please enter a valid date.");
        } else if (inputBirthdayAdjective === "") {
            alert("Please enter valid a valid adjective.");
        } else if (inputBirthdayUserName === "") {
            alert("Please enter a valid name.");
        } else {
            generateSentence();
        }
    } else if (lifeEvent === "2") {
        inputGraduationObject = $("#graduation-name").val();
        inputGraduationDate = $("#graduation-date").val();
        inputGraduationSchoolName = $("#graduation-school-name").val();
        inputGraduationAdjective = $("#graduation-adjective").val();
        inputGraduationUserName = $("#graduation-user-name").val();

        if(inputGraduationObject === "") {
            alert("Please enter a valid reciever name.");
        } else if (inputGraduationDate === "") {
            alert("Please enter a valid date.");
        } else if (inputGraduationSchoolName === "") {
            alert("Please enter valid a valid school name.");
        } else if (inputGraduationAdjective === "") {
            alert("Please enter a valid adjective.");
        } else if (inputGraduationUserName === "") {
            alert("Please enter a valid name.");
        } else {
            generateSentence();
        }
    } else if (lifeEvent > 3 || lifeEvent <= 0){
        alert("Please make a selection.");
    }
}

$("#generate-button").click(enterWords);