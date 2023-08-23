const input=document.getElementById("item");
const botonAgregar=document.getElementById("agregar");
const botonLimpiar=document.getElementById("limpiar");
const contenedor=document.getElementById("contenedor");

if(!localStorage.getItem("lista")){
    var lista=[];
} else {
    var lista=localStorage.lista.split(',');
   
}

botonAgregar.addEventListener("click",()=>{
    if(input.value){
    let valor=input.value;
    lista.push(valor);
    localStorage.setItem("lista", lista);
    mostrar();
    input.value="";
    }

});

document.addEventListener("DOMContentLoaded",mostrar);

function mostrar(){
    contenedor.innerHTML="";
    for (const valor of lista) {
        const li=document.createElement("li");
        li.appendChild(document.createTextNode(valor));
        contenedor.appendChild(li);
    }
}

botonLimpiar.addEventListener("click",()=>{
    localStorage.removeItem("lista");
    lista=[];
    contenedor.innerHTML="";
})