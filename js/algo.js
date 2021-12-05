function isBigger(a,b)
{
  return a[0]>b[0]||a[1]>b[1]||a[2]>b[2]
}
function calcbox() {
  var data = [];
  for (var i = 0; i < dataIn.length; i++)
      data[i] = dataIn[i].slice();
  offset = parseFloat($('#inputpackage').val())
  length = parseFloat($('#inputlength').val()) + offset
  width = parseFloat($('#inputwidth').val()) + offset
  height = parseFloat($('#inputheight').val()) + offset
  for(let sub of data) 
  {
    var a = sub[0]
    var b = sub[1]
    var c = sub[2]
    sub.sort((a, b) => b - a);
    sub[3] = a
    sub[4] = b
    sub[5] = c
  }
  data.sort((a, b) => a[0]*10000 - b[0]*10000+a[1]*100-b[1]*100+a[2]-b[2]);
  input = [length, width, height].sort((a, b) => a - b);
  console.log(data)
  var index = 0
  while(index<data.length && isBigger(input,data[index]))
  {
    index++
  }
  var output = ""
  if(index>=data.length)
  {
    output = "Not Found"
  }
  else
  {
    output = ""+data[index][3]+'x'+data[index][4]+'x'+data[index][5]
  }
  $('#output').val(output)
}