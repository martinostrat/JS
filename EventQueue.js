/**
 * Created by martinostrat on 1/22/17.
 */

function click() {
    console.log("click event")
}

document.addEventListener("click", click);


function wait() {
    var i = 0;

    setTimeout(function () {
        console.log("finished");
        i++;
        while (i < 1) {
            wait();
        }
    }, 3000)
}

window.onload = wait();