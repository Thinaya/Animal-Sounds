function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FmhPSXMSQ/model.json', modelReady);
}

function modelReady()
{
classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
 document.getElementById("results_label").innerHTML = 'I can hear - '+
 results[0].label;
 document.getElementById("results_confidence").innerHTML = 'Acuuracy - '+
 (results[0].confidence*100).toFixed(2)+"%";
 document.getElementById("results_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
 document.getElementById("results_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

 img = document.getElementById('cat');
 img1 = document.getElementById('dog');
 img2 = document.getElementById('mouse');

 if(results[0].label =="Dog") {
    update()img.src = 'https://maxcdn.icons8.com/Share/icon/Animals/dog1600.png';
 } else if (results[0].label == "Cat") {
    img.src = 'https://image.flaticon.com/icons/png/512/375/375112.png';
} else if (results[0].label == "Mouse") {
    img.src = 'https://cdn1.iconfinder.com/data/icons/pest-control-filled-color/300/94117165Untitled-3-512.png';
 }else{
    img.src = 'aliehttps://cdn2.iconfinder.com/data/icons/medical-specialties-1/256/Otology-512.pngns-01.png';
 }
}
}