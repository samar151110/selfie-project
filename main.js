var v1 = window.webkitSpeechRecognition;
var v2 = new v1();
function Start() {
    document.getElementById("textbox").innerHTML = " ";
    v2.start();

}
v2.onresult = function (event) {
    console.log(event);
    var v3 = event.results[0][0].transcript;
    console.log(v3);
    document.getElementById("textbox").innerHTML = v3;
    if (v3 == "Take my selfie") {
        console.log("take my selfie");
        Speak();
    }
}

function Speak() {
    var v4 = window.speechSynthesis;
    var v5 = "Taking your selfie in 5 seconds";
    var v6 = new SpeechSynthesisUtterance(v5);
    v4.speak(v6);
    Webcam.attach(camera);
    setTimeout(function () {
        samar();
        save();
    }, 5000);

}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

function samar() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="img" src="' + data_uri + '"/>';
    });
}
function save() {
    link = document.getElementById("link");
    image = document.getElementById("img").src;
    link.href = image;
    link.click();

}