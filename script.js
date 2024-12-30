let myText = "";
let convert = document.getElementById("convert");
let stop = document.getElementById("stop");

convert.addEventListener("click", () => {
    myText = document.getElementById("text").value.trim()

    if (myText === "") {
        let error = new SpeechSynthesisUtterance("Please Enter A Message");
        speechSynthesis.speak(error);
    }

    
    
    else{
        let audio = new SpeechSynthesisUtterance(myText);
        speechSynthesis.speak(audio);
    }
})

stop.addEventListener("click", () => {
    speechSynthesis.cancel();
})
