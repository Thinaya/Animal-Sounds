function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/FmhPSXMSQ/model.js', modelReady);
}

function modelReady()
{
classifier.classify(gotResults);
}