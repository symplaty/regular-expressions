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
  var s = input.value;
  var r = /\b\w+\b/g;

  var words = s.split(/(\W+)/);
  for (i in words){
    var mSpan = createSpan(words[i]);
    //var mP = createP(words[i]);
    var a = 1;

    if(!(/\W+/).test(words[i])){

      mSpan.onmouseover = highlight;
      mSpan.onmouseout = normal;

      // Function Closure
      // (function(elm){
      //   mSpan.onmouseover = function(){
      //     highlight(elm);
      //   };
      // })(mSpan);

      // (function(){
        //   var tmp = mSpan;
        //   mSpan.onmouseover = function(){
          //     highlight(tmp);
          //   };
          // })();

    }
  }
}



function highlight(e){
    //console.log(e.innerHTML);
    console.log(this.innerHTML);
    //this.style['backgroundColor'] = '#00ff00';
    this.style.backgroundColor = '#00ff00aa';
}
function normal(e){
  this.style.backgroundColor = '#00ff0000';
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
  //对参数parent和position赋初值
  parent = parent || document.body;
  position = position || 1;
  //创建p元素
  var e = document.createElement('p');
  e.innerHTML = text;
  //新元素的插入位置
  if(position == -1)
    parent.insertBefore(e, parent.childNodes[0]);
  else if(position == 1)
    parent.append(e);
  else ;
  return e;
}

/**
* text: 文本内容
* parent: 新建标签的父对象，默认为body
* position: 新建标签的插入位置。向前或向后，默认为向后。
**/
function createSpan(text, parent, position){
  //对参数parent和position赋初值
  parent = parent || document.body;
  position = position || 1;
  //创建span元素
  var e = document.createElement('span');
  e.innerHTML = text;
  //新元素的插入位置
  if(position == -1)
    parent.insertBefore(e, parent.childNodes[0]);
  else if(position == 1)
    parent.append(e);
  else ;
  return e;
}
