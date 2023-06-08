
setInterval(ceas, 1000);


function ceas() {
  const d = new Date();
  let lang = navigator.language;
  let url = location.origin;
  let browser = navigator.product;
  let os = navigator.platform;

  document.getElementById("url").innerHTML = "URL: " + url;
  document.getElementById("demo").innerHTML = "Time: " + d.toLocaleTimeString();
  document.getElementById("lang").innerHTML = "Language: " + lang;
  document.getElementById("browser").innerHTML = "Browser: " + browser;
  document.getElementById("os").innerHTML = "Operating System: " + os;
}

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
//numar cate clickuri fac
var clickCount = 0;
var clickX, clickY;
canvas.addEventListener('click', function(event) {
 //iau coordonatele cursorului relativ de elem canvas
  var rect = canvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;

  if (clickCount === 0) {
    // la primul click iau coordonatele primului colt
    clickX = x;
    clickY = y;
    clickCount++;
  } else if (clickCount === 1) {
    // calculez coordonatele celui de-al doilea colt relativ cu primul colt
    var width = x - clickX;
    var height = y - clickY;
    drawRectangle(ctx, clickX,clickY, width, height);
    clickCount = 0;
  }
});

function drawRectangle(context, x, y, width, height) {
 //iau val culorilor din selectoare
  let col1 = document.getElementById("culoare1").value;
  let col2 = document.getElementById("culoare2").value;
 
  
  context.fillStyle = col1;
  context.strokeStyle = col2;
  context.lineWidth = 4;
  
  context.fillRect(x, y, width, height);
  context.strokeRect(x, y, width, height);
}

