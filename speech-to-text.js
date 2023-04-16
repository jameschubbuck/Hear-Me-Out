recognition = new webkitSpeechRecognition()

recognition.onresult = function (event) {
    speak(event.results[0][0].transcript);
}

window.onload = function() {
    recognition.start()
}