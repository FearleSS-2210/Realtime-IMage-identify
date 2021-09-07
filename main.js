function setup() {
    canvas = createCanvas(300, 300, 300, 400);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CLWGILVKP/model.json', modelLoaded);
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function modelLoaded() {
    console.log("Model is loaded..");
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }

    else {
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=(results[0].confidence.toFixed(2))*100+"%";
    }
}