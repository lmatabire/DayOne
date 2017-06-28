var button = document.getElementsByTagName('button');
button[0].onclick = calc;

function calc() {

    var d = document.getElementById('math').value;
    var e = document.getElementById('english').value;
    var f = document.getElementById('history').value;
    var g = document.getElementById('spanish').value;
    var avg = (parseFloat(d) + parseFloat(e) + parseFloat(f) + parseFloat(g)) / 4;
    var h;

    if (avg >= 75) {
        h = "Passed!";
    }
    if (avg <= 74) {
        h = "Failed!";
    }
    if (d && e && f && g) {
        document.getElementById('result').innerHTML = "The average is " + avg + " which means you have " + h;
    } else {
        document.getElementById('result').innerHTML = "Please fill all inputs first."
    }
}
