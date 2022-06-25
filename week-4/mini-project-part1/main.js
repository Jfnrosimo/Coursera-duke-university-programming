

function uploadImage() {
    var imageFile = document.getElementById("fileimage");
    var image = new SimpleImage(imageFile);
    var canvas = document.getElementById("can");
    image.drawTo(canvas);
}