/**
 * Created by martinostrat on 1/22/17.
 */


var array = ["masfskdf", "sdfksd", "sdff", "mkdsfm"];


function otsi(x) {
    var tulemus = [];

    for (i = 0; i < array.length; i++){
        if (array[i].indexOf(x) == 0) tulemus.push(array[i])
    }

    console.log(tulemus);
}


otsi('m');


