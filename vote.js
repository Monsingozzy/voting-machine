var j = 0;
var b = 0;
var c = 0;

function bjpfun() {
    b = b + 1
    document.getElementById("rbjp").innerHTML = b;
}
function cngfun() {
    c = c + 1;
    document.getElementById("rcng").innerHTML = c;
}
function jdsfun() {
    j = j + 1;
    document.getElementById("rjds").innerHTML = j;
}
function resultt() {
    var title = "BJP jai modi"
    if (b > j && b > c) {
        document.getElementById("winner").innerHTML = title;
    }
    else {
        if (c > b && c > j) {
            var title = "CNG jai pappu"
            document.getElementById("winner").innerHTML = title;

        }
        else {
            if (j > b && j > c) {
                var title2 = "JDS jai kswamy layout"
                document.getElementById("winner").innerHTML = title2;
            }
            else {
                var title4 = "election was tie lets super over hahaha ☺☺☺☻"
                document.getElementById("winner").innerHTML = title4;
            }

        }
    }
}