var imgFile = null;
var fgImage = null;
var bgImage = null;
var canvas;

function uploadFg() {
    imgFile = document.getElementById("fgimage");
    fgImage = new SimpleImage(imgFile);
    canvas = document.getElementById("first-canvas");
    filename = imgFile.value;
    alert("You chose " +filename +" as foreground image.");
    fgImage.drawTo(canvas);
}

function uploadBg() {
    imgFile = document.getElementById("bgimage");
    bgImage = new SimpleImage(imgFile);
    canvas = document.getElementById("second-canvas");
    filename = imgFile.value;
    alert("You chose " +filename +" as background image.")
    bgImage.drawTo(canvas);

}

function doGreenScreen() {
    var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
    for (var pixel of fgImage.values()){
        var x = pixel.getX();
        var y = pixel.getY();
        if (pixel.getGreen() > 240) {
            var bgPixel = bgImage.getPixel(x,y);
            output.setPixel(x, y, bgPixel);
        }else {
            output.setPixel(x, y, pixel);
        }
        
    }
    return output;
}

function greenScreen() {
    if (fgImage == null || ! fgImage.complete()){
        alert("foreground not loaded");
        return;
    }
    if (bgImage == null || ! bgImage.complete()){
        alert("background not loaded");
    }
    clearCanvas();
    var finalImage = doGreenScreen();
    canvas = document.getElementById("first-canvas");
    finalImage.drawTo(canvas) ;
}

function clearCanvas() {
    canvas = document.getElementById("first-canvas");
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    canvas = document.getElementById("second-canvas");
    var context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height);
}





