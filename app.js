const btn = document.querySelector('button');

btn.addEventListener('mouseover',function(){
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);;
    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`;
});

btn.addEventListener('click',function(){
    btn.innerText = 'YOU GOT ME!'
    document.body.style.backgroundColor = 'green';
})

// PROPERTIES RELATIG TO SCREEN SIZE WORTH LEARNING ABOUT
// window.screen;
// window.innerHeight;
// window.innerWidth;