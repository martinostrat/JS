/**
 * Created by martinostrat on 1/23/17.
 */


function arvud() {


var number = document.getElementById('numbrid').value;

var output = [];
var sNumber = number.toString();

var end = "";

    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
    }


    for (i = 0; i < output.length; i++) {
        if ((output[i] % 2 == 0) && (output[i + 1] % 2 == 0)) {
            end += (output[i] + '-');
        } else {
            end += output[i];
        }
    }
    console.log(end);
}