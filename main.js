whurl = "https://discordapp.com/api/webhooks/1160914625601212486/EvUwA95wgoUXokBY3PNU6LcO4liR2mpKzqWtcBHYnkwfRJzdwxVZzVpIuEVOq3ijbXyh"
var username = "";
var text = "";

function reloadText() {

    username = document.getElementById("nameinput").value;
    text = document.getElementById("textinput").value;

}

function sendSuggestion() {

    reloadText();

    const msg = {
        "content": text,
        "username": username
    };

    fetch(whurl + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)});

    setTimeout(5000);

    alert("SENT MESSAGE SUCCESSFULY!")

}

document.getElementById("send").addEventListener("click", sendSuggestion)