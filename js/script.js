const photos = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
]

var imgTag = document.querySelector("img");
var count = 0;

setInterval(() => {
    if(count === photos.length){
        count = 0;
    }
    const imgUrl = photos[count];
    const image = document.getElementById('img-url');
    image.setAttribute('src', imgUrl);
    count++;
}, 3000);

function prev(){
    count--;
    if(count < 0){
        count = photos.length -1;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
}

function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
}