var imageFile = null;
var image = null;
var image2 = null;
var image3 = null;
var image4 = null;
var image5 = null;
var image6 = null;
var image7 = null;
var canvas;

function uploadImage() {
    imageFile = document.getElementById("fileimage");
    image = new SimpleImage(imageFile);
    image2 = new SimpleImage(imageFile);
    image3 = new SimpleImage(imageFile);
    image4 = new SimpleImage(imageFile);
    image5 = new SimpleImage(imageFile);
    image6 = new SimpleImage(imageFile);
    image7 = new SimpleImage(imageFile);
    canvas = document.getElementById("can");
    image.drawTo(canvas);
}

function applyReset() {
    imageIsLoaded(image);
    alert("Are you sure you want to reset image?")
    canvas = document.getElementById("can");
    var context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width, canvas.height)
    image.drawTo(canvas);
}

function imageIsLoaded(check) {
    if (image == null || ! image.complete()) {
        alert("Image is not ready!");
    }
}

function applyGrayscale() {
    imageIsLoaded(image2);
    for (var pixel of image2.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    image2.drawTo(canvas);
}

function applyRed() {
    imageIsLoaded(image3);
    for (var pixel of image3.values()) {
        var avg = (pixel.getGreen()+pixel.getBlue()+pixel.getRed())/3;
            pixel.setRed(2*avg);
            pixel.setGreen(avg-255);
            pixel.setBlue(avg-255);
    }
    image3.drawTo(canvas);
}



function applyHorizontalRainbow() {
    imageIsLoaded(image4);
    var height = image4.getHeight();
    for (var pixel of image4.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        var constant = 127;
        if (pixel.getY() <= height/7) {
            pixel.setRed(avg+constant);
            pixel.setGreen(avg-constant);
            pixel.setBlue(avg-constant);
        }
        if ((pixel.getY() >= height/7) && (pixel.getY() <= (2*height)/7))  {
            pixel.setRed(avg+constant);
            pixel.setGreen(avg-0);
            pixel.setBlue(avg-constant);
        }
        if ((pixel.getY() >= (2*height/7)) && (pixel.getY() <= (3*height)/7))  {
            pixel.setRed(avg+constant);
            pixel.setGreen(avg+constant);
            pixel.setBlue(avg-constant);
        }
        if ((pixel.getY() >= (3*height/7)) && (pixel.getY() <= (4*height)/7))  {
            pixel.setRed(avg-constant);
            pixel.setGreen(avg+constant);
            pixel.setBlue(avg-constant);
        }
        if ((pixel.getY() >= (4*height/7)) && (pixel.getY() <= (5*height)/7))  {
            pixel.setRed(avg-constant);
            pixel.setGreen(avg-constant);
            pixel.setBlue(avg+constant);
        }
        if ((pixel.getY() >= (5*height/7)) && (pixel.getY() <= (6*height)/7))  {
            pixel.setRed(avg-52);
            pixel.setGreen(avg-constant);
            pixel.setBlue(avg);
        }
        if ((pixel.getY() >= (6*height/7)) && (pixel.getY() <= height)/7)  {
            pixel.setRed(avg);
            pixel.setGreen(avg-constant);
            pixel.setBlue(avg);
        }

    }
    image4.drawTo(canvas);
}

function applyVerticalRainbow() {
    imageIsLoaded(image5);
    var width = image5.getWidth();
    for (var pixel of image5.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        var constant = 127;
        if (pixel.getX() <= width/7) {
            pixel.setRed(avg+constant);
            pixel.setGreen(avg-constant);
            pixel.setBlue(avg-constant);
        }
        if ((pixel.getX() >= width/7) && (pixel.getX() <= (2*width)/7))  {
            pixel.setRed(avg+constant);
            pixel.setGreen(avg-0);
            pixel.setBlue(avg-constant);
        }
        if ((pixel.getX() >= (2*width/7)) && (pixel.getX() <= (3*width)/7))  {
            pixel.setRed(avg+constant);
            pixel.setGreen(avg+constant);
            pixel.setBlue(avg-constant);
        }
        if ((pixel.getX() >= (3*width/7)) && (pixel.getX() <= (4*width)/7))  {
            pixel.setRed(avg-constant);
            pixel.setGreen(avg+constant);
            pixel.setBlue(avg-constant);
        }
        if ((pixel.getX() >= (4*width/7)) && (pixel.getX() <= (5*width)/7))  {
            pixel.setRed(avg-constant);
            pixel.setGreen(avg-constant);
            pixel.setBlue(avg+constant);
        }
        if ((pixel.getX() >= (5*width/7)) && (pixel.getX() <= (6*width)/7))  {
            pixel.setRed(avg-52);
            pixel.setGreen(avg-constant);
            pixel.setBlue(avg);
        }
        if ((pixel.getX() >= (6*width/7)) && (pixel.getX() <= width)/7)  {
            pixel.setRed(avg);
            pixel.setGreen(avg-constant);
            pixel.setBlue(avg);
        }

    }
    image5.drawTo(canvas);
}

function applyBlur() {
    var blurImage = new SimpleImage(image7.getWidth(), image7.getHeight());
    for (var pixel of image7.values()){
        if(Math.random() >= 0.5) {
            var oldpixel = image7.getPixel(pixel.getX(), pixel.getY());
            blurImage.setPixel(pixel.getX(), pixel.getY(), oldpixel);
        }else{
            var dist = Math.floor(Math.random()*30-15);
            var newx = pixel.getX() + dist;
            var newy = pixel.getY() + dist;
            if (newx > 0 && newx <= image7.getWidth()-1) {
                if (newy > 0 && newy <= image7.getHeight()-1){
                    var nearpixel = image7.getPixel(newx, newy);
                    blurImage.setPixel(pixel.getX(),pixel.getY(), nearpixel);
                }else{
                    blurImage.setPixel(pixel.getX(),pixel.getY(), pixel);
                }
            }else{
                blurImage.setPixel(pixel.getX(),pixel.getY(), pixel);
            }
        }
    }
    blurImage.drawTo(canvas);
}