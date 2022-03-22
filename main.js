const mainContainer = document.querySelector('.main-container')
const btnReset = document.querySelector('button')
const form = document.querySelector('.add')
const colorRainbow = document.querySelector('.rainbow-mode')
const colorClassic = document.querySelector('.classic-mode')
let color = 'rgb(0, 0, 0)'

sizeGrid(16)

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const gridSize = form.add.value.trim();
    if(!isNaN(gridSize)){
        if(gridSize<=100){
            sizeGrid(gridSize)
        } else{
            alert('Only number under 100')
        }
        
    } else{
        alert('You only can type numbers!')
    }
    form.reset()
    

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

        elemento.setAttribute('style', `background-color:${color};`);
        
    }))
}


btnReset.addEventListener('click', ()=>{
    window.location.reload(true)
})

colorRainbow.addEventListener('click', ()=>{
    window.addEventListener('mousemove', mouseMove)
    
})

function mouseMove(){
    color = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`
}


colorClassic.addEventListener('click', ()=>{
    window.removeEventListener('mousemove', mouseMove)
    
    color = 'rgb(0, 0, 0)'
})

function randomNumber(number){

   return Math.floor(Math.random() * number) 
    

}