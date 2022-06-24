

function doColor() {
    var dd1 = document.getElementById("div1");
    var colorinput = document.getElementById("clr")
    dd1.style.backgroundColor = colorinput.value;
}

function doSquare() {
    var sliderinput = document.getElementById("slr");
    var len = sliderinput.value;
    var canvas = document.getElementById("div1");
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "red";
    context.fillRect(10, 10, len, len);
    context.fillRect(parseInt(len) + 20, 10, len, len);
    context.fillRect(len*3, 10, len, len);
}


  
  
  
  
  