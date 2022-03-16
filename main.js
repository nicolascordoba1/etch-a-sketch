const mainContainer = document.querySelector('.main-container')
const btnReset = document.querySelector('button')
const form = document.querySelector('.add')
const colorRainbow = document.querySelector('.rainbow-mode')
const colorClassic = document.querySelector('.classic-mode')

sizeGrid(16)

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const gridSize = form.add.value.trim();
    if(!isNaN(gridSize)){
        if(gridSize<=100){
            sizeGrid(gridSize)
        } else{
            const warning = document.createElement('p')
            warning.innerText = 'Choose a number under 100 or everything is going to explode!'
            warning.classList.add('warning')
            form.appendChild(warning)
        }
        
    } else{
        alert('You only can type numbers!')
    }

})

function sizeGrid(gridSize){
    mainContainer.innerHTML = '';
    for(let i = 0; i<gridSize*gridSize;i++){
        const container = document.createElement('div')
        container.classList.add('container')
        mainContainer.appendChild(container)
    }
    mainContainer.setAttribute('style', `grid-template-rows: repeat(${gridSize}, 1fr);grid-template-columns: repeat(${gridSize}, 1fr);`)
    draw()
}

function draw(){
    
    const contenedor = document.querySelectorAll('.container')

    contenedor.forEach(elemento => elemento.addEventListener('mousemove', ()=>{

        elemento.setAttribute('style', 'background-color:white;');
        
    }))
}


btnReset.addEventListener('click', ()=>{
    window.location.reload(true)
})

colorRainbow.addEventListener('click', )