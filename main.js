const mainContainer = document.querySelector('.main-container')
const container = document.createElement('div')
const btn = document.querySelector('button')

const btn16 = document.querySelector('.button16')
const btn32 = document.querySelector('.button32')
const btn64 = document.querySelector('.button64')



btn16.addEventListener('click', ()=>{
    mainContainer.innerHTML = '';
    mainContainer.classList.remove('main-container64')
    mainContainer.classList.remove('main-container32')
    mainContainer.classList.add('main-container16')

    for(let i=0; i<256;i++){
        const container = document.createElement('div')
        container.classList.add('container')
        mainContainer.appendChild(container)
    }
    draw()  
});

btn32.addEventListener('click', ()=>{
    mainContainer.innerHTML = '';
    mainContainer.classList.remove('main-container64')
    mainContainer.classList.remove('main-container16')
    mainContainer.classList.add('main-container32')

    for(let i=0; i<1024;i++){
        const container = document.createElement('div')
        container.classList.add('container')
        mainContainer.appendChild(container)
    }
    draw()  
});
btn64.addEventListener('click', ()=>{
    mainContainer.innerHTML = '';
    mainContainer.classList.remove('main-container16')
    mainContainer.classList.remove('main-container32')
    mainContainer.classList.add('main-container64')

    for(let i=0; i<4096;i++){
        const container = document.createElement('div')
        container.classList.add('container')
        mainContainer.appendChild(container)
    }
    draw()  
});

function draw(){
    const contenedor = document.querySelectorAll('.container')

contenedor.forEach(elemento => elemento.addEventListener('mousemove', ()=>{
    elemento.classList.add('container-color')
}))
}


btn.addEventListener('click', ()=>{
    window.location.reload(true)
})