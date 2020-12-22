// for(var nAwal =1;nAwal<=10;nAwal++){
//     console.log('Hello world! ' + nAwal + 'x')
// }

function generatePyramid() {
    var output = '';
    for (var i = 9; i > 0; i--) {
        for (var j = 1; j <= i; j++) {
            output += j+' ';
        }
        console.log(output);
        output = '';
    }
}

generatePyramid();
   