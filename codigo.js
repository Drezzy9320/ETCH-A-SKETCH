const range = document.querySelector('.myRange');
const value = document.querySelector('#value');
document.getElementById("reinicio").addEventListener("click", reinicio)

let colorDiv = "black"

console.log(crearDivs())
function reinicio(){
  let square = crearDivs()
  for(let cuadrosVacios of square){
    cuadrosVacios.style.backgroundColor = "none"
   
  }
}





function seleccionColor(){
  if(colorDiv === "random"){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
  }
  else{
      this.style.backgroundColor = colorDiv
  }

}

function cambioColor(elemento){
   colorDiv = elemento;  
}


range.addEventListener("change", function(){
  const valor = this.value;
  crearDivs(valor)
})

range.addEventListener("input", function() {
  value.innerHTML = this.value; 
 

  
});

function crearDivs(size){
  const contenedorDiv = document.querySelector('.Cuadricula');
  contenedorDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  contenedorDiv.style.gridTemplateRows =`repeat(${size}, 1fr)`;
  let cuadrados = contenedorDiv.querySelectorAll("div")
  cuadrados.forEach((div)=> div.remove())
 
 
  let variable = size*size
  let square = [];

  for(let i = 0; i < variable; i++){
    const cuadrados = document.createElement("div")
    cuadrados.style.backgroundColor = "white"
    contenedorDiv.insertAdjacentElement("beforeend", cuadrados)
    cuadrados.addEventListener("mouseover", seleccionColor)
    square.push(cuadrados)
 
  }
  
  return (cuadrados) 
 
}



