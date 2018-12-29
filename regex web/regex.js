var input;
var submit;
var output;
setup();


function setup(){
  input = document.getElementById('input');
  submit = document.getElementById('submit');
  output = document.getElementById('output');
  //input.onchange = newText;
  submit.onclick = newText;
  // console.log(input.value);
}
function newText(){
  var s = input.value;
  var r = /\b\w{3,5}\b/;

  var p = document.createElement('p');
  p.innerHTML = s.match(r);
  console.log('p: ' + p.innerHTML);
  output.insertBefore(p, output.childNodes[0]);


}
