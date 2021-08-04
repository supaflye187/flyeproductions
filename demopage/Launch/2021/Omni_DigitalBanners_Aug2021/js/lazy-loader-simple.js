//Eric Flye
//Oct 2, 2017
// Only loads image when in viewport
function lazyload() {
    var lazyImage = document.getElementsByClassName('lazy');
    for (i=0;i<lazyImage.length;i++) {
        if(elementInViewport(lazyImage[i])) {
            lazyImage[i].setAttribute('src', lazyImage[i].getAttribute('data-src'))
            console.log("load" + lazyImage[i]);
        }
        else if (!elementInViewport(lazyImage[i])) {
            lazyImage[i].setAttribute('data-src', lazyImage[i].getAttribute(''))
            console.log("unload" + lazyImage[i]);
        }
    }
};

function elementInViewport (e) {
    var rect = e.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >=0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


