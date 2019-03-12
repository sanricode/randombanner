
(function () {

var kyou = new Date();
var anohi = new Date("2017/07/31");

var arekara = Math.floor((kyou - anohi) / 86400000);

document.getElementById("setTime").innerHTML = arekara;

})();
