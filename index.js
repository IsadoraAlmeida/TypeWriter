function typeWriter(element) {
    let textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((c, i) => {
        setTimeout(() => {
            element.innerHTML += c;
        }, 150 * i); 
    });
  }

  typeWriter(document.querySelector('h1'));