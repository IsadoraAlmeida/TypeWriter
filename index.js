function typeWriter(element) {
    const textArray = "Hello, world!".split('');
    element.innerHTML = '';
    textArray.forEach((c, i) => {
        setTimeout(() => {
            element.innerHTML += c;
        }, 150 * i); 
    });
}

typeWriter(document.querySelector('h1'));

setInterval(() => {
    typeWriter(document.querySelector('h1'));
}, 4000);
