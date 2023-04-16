function speak(text){
    speechSynthesis.speak(new SpeechSynthesisUtterance(text))
}