
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var line3 = document.getElementById('line3');

setTimeout(function() {
  line2.innerHTML = "i remember… today is something special";
}, 2000);

setTimeout(function() {
  line3.innerHTML = "today's Sophies birthday";
}, 4000);

function blowCandle() {
  var flame = document.getElementById('candleFlame'); // bug: wrong id
  flame.style.display = 'none';
  document.getElementById('wish').innerHTML = "wish made!";
}