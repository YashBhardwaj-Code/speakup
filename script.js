let myText = "";
let convert = document.getElementById("convert");
let stop = document.getElementById("stop");

convert.addEventListener("click", () => {
    myText = document.getElementById("text").value.trim()

    if (myText === "") {
        speechSynthesis.speak("Enter A Message");
    }

    
    
    else{
        let audio = new SpeechSynthesisUtterance(myText);
        speechSynthesis.speak(audio);
    }
})

stop.addEventListener("click", () => {
    speechSynthesis.cancel();
})
