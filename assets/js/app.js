//aqui llamo al boton para twitear
const boton = document.getElementById('btn');
boton.addEventListener('click', () =>{
//aqui guardo el texto ingresado
let texts = document.getElementById('text').value;
document.getElementById('text').value = ' ';
const content = document.getElementById('contenedor');
if (texts.length == 0 || texts == null) {
	alert('Debes ingresar un twitt');
	return false;
};
//crea un div contenedor
 const newContenedor = document.createElement('div');
 //nodos en el textarea
 let newText = document.createTextNode(texts);

 let contText = document.createElement('p');
 contText.appendChild(newText);
 content.appendChild(newContenedor);
 newContenedor.appendChild(contText);

});
const contar = () => { 
         const max = "150"; 
         let cadena = document.getElementById("text").value; 
         const longitud = cadena.length; 

             if(longitud <= max) { 
                  document.getElementById("contador").value = max-longitud; 
             } else { 
                  document.getElementById("text").value = cadena.substr(0, max);
             } 
    } 