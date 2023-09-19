homeButton = document.querySelector('.logo');
menuButtons = document.querySelectorAll('.element');
bannerButtons = document.querySelectorAll('.item-main-catalog');
urlPaths = ["/clothes", "/shoes", "/raincoats"]

menuButtons.forEach((item, index) => {
    if (index < (menuButtons.length-1)) {
        item.addEventListener('click', () => {
            newUrl = new URL(window.location.href); 
            fullPath = new URL("http://" + newUrl.host + urlPaths[index]);
            console.log("Page location is " + window.location.href);
            location.href = fullPath;
        });
    }
});

bannerButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
        newUrl = new URL(window.location.href); 
        fullPath = new URL("http://" + newUrl.host + urlPaths[index]);
        location.href = fullPath;
    });
});

homeButton.addEventListener('click', () => {
    newUrl = new URL(window.location.href); 
    fullPath = new URL("http://" + newUrl.host);
    location.href = fullPath;
});

