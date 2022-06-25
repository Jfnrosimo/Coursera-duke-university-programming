var image;
var imgcanvas;

function upload() {
    var fileinput = document.getElementById("upload");
    image = new SimpleImage(fileinput);
    imgcanvas = document.getElementById("can");
    var filename = fileinput.value;
    alert("You chose " +filename);
    image.drawTo(imgcanvas);
}

function makeGray() {
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    
    imgcanvas = document.getElementById("can2");
    image.drawTo(imgcanvas);