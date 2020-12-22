// for(var nAwal =1;nAkhir<=10;nAwal++){
//     console.log('Hello world! ' + nAwal + 'x')
// }

function generatePyramid() {
  var output = ''
  for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
      output += j + ' '
    }
    console.log(output)
    output = ''
  }
}

generatePyramid()
