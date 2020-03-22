var inputObject, inputDate, inputUserName, inputAdjective;
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
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://linguatools-sentence-generating.p.rapidapi.com/realise?" + 
        "subject=happy birthday" + 
        "&verb=to" + 
        "&objdet=" + 
        "&object=" + inputObject +
        "&objmod=" + 
        "&subjdet=" + 
        "&subjnum=plural",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "linguatools-sentence-generating.p.rapidapi.com",
            "x-rapidapi-key": "c50b1c7ba4msh4237abf70ff49e2p1e5053jsnd1743f7dd918"
        }
    }

    $.ajax(settings).done(function (response) {
        message = response.sentence;
        var userAdjective = getSynonyms(inputAdjective);
        userAdjective.then(function(json) {
            $("#message-area").append("<p>").text(message).append(" I can't believe it's " + inputDate + " again. A whole year has passed by and it's just crazy. You are so " + json.synonyms[Math.floor(Math.random() * json.synonyms.length)] + ". Let's have another great one. From, " + inputUserName);
        });
       
    });
}

function enterWords() {
    event.preventDefault();

    $("#message-area").empty();
    inputObject = $("#birthday-name").val();
    inputDate = $("#birthday-date").val();
    inputUserName = $("#birthday-user-name").val();
    inputAdjective = $("#birthday-adjective").val();

    generateSentence();
}

$("#generate-button").click(enterWords);