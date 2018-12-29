var input;
var submit;
var output;
setup();


function setup(){
  input = document.getElementById('input');
  submit = document.getElementById('submit');
  output = document.getElementById('output');
  //input.value = "Remember two numbers: 111-222-3333 and 444-555-6666.";
  input.value = "GitHub Wikis is a simple way to let others 111-2222 contribute content. Any GitHub user can create and edit 333-4444 pages to use for documentation, examples, support, or anything 555 you wish.";
  submit.onclick = newText;

}
function newText(){
  //var s = input.value;

  // email address validation
  // var r = /\w+@\w+\.[a-z]+/s;
  // createP(r.test(s));

  // phone number validation
  // var r = /(\d{3})[.-]\d{3}[-.]\d{4}/;
  // matches = s.match(r);
  // console.log(matches);
  // for (i in matches){
  //   createP(matches[i]);
  // }

  //exec()
  // var r = /(\d{3})[.-]\d{3}[-.]\d{4}/g;
  // var result = r.exec(s);
  // while (result != null) {
  //   createP(result[1]);
  //   result = r.exec(s);
  // }

  //split()
  // var r = /(\W+)/;
  // var results = s.split(r);
  // console.log(results);
  // for (i in results){
  //   createP(results[i]);
  // }

  //replace()
  var s = input.value;
  var r = /(\d{3})-(\d{4})/g;
  var newString = s.replace(r, replacement);
  console.log(newString);


}

function replacement(match){
  //console.log(match);
  console.log(arguments);
  return match.toUpperCase();
}



/**
* text: 文本内容
* parent: 新建标签的父对象，默认为body
* position: 新建标签的插入位置。向前或向后，默认为向后。
**/
function createP(text, parent = document.body, position = 1){
  var p = document.createElement('p');
  p.innerHTML = text;
  if(position == -1)                              //insert element before
    parent.insertBefore(p, parent.childNodes[0]);
  else if(position == 1)                          //append element
    parent.append(p);
  else ;

}
