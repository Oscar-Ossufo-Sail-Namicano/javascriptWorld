function putText(text) {
    var element = document.getElementById("text")
    element.innerHTML = text;

}

data = document.getElementById('name-field').innerText;
putText(data);

function mznToUSD(mzn, cotation) {
    var dollar = mzn * cotation;
    return dollar;
}

var mzn = 1;
var cotation = 63.2;

var dollar = mznToUSD(mzn, cotation);
alert(dollar)