window.onload = function() {
    recognition = new webkitSpeechRecognition()
    recognition.interimResults = true
    recognition.continuous = true
    recognition.start()
    recognition.onresult = function (event) {
        for (var i = event.resultIndex; i < event.results.length; i++) {
            for(var j = 0; j <  event.results[i].length;j++){
                console.log(event.results[i][j].transcript)
            }
        }
    }
    recognition.onerror = function (event) {
        console.log(event)
    }
    recognition.onend = function (event) {
        console.log("end")
        console.log(recognition)
        recognition.start()
    }
    recognition.onstart = function (event){
        console.log("start")
    }
}