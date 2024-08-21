const d=document;
const textArea = d.querySelector(".entrada")
const imagenencri = d.querySelector(".imgencri");
const loaderc= d.querySelector(".loader");
const resultadotitulo = d.querySelector(".tituloResultado");
const textoresultado = d.querySelector(".resultadoTexto")
const botonencriptar = d.querySelector(".btnencriptador")
const botondesencriptar = d.querySelector(".btndesencriptador")
const botoncopiar= d.querySelector(".btncopiar")


const llaves =[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function encriptarMensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i=0; i<mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j=0; j<llaves.length; j++){
            if(letra == llaves [j][0]){
                encriptada = llaves[j][1];
                break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for (let i=0 ; i<llaves.length ; i++){
        let regex = new RegExp(llaves[i][1],"g");
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}


textArea.addEventListener("input", (e)=>{
    imagenencri.style.display = "none";
    
    loaderc.classList.remove("hidden");
    resultadotitulo.textContent = "Capturando el Mensaje"
    textoresultado.textContent = "";
})

botonencriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
textoresultado.textContent = mensajeEncriptado;
botoncopiar.classList.remove("hidden");
resultadotitulo.textContent = "El Resultado es:"
})

botondesencriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
textoresultado.textContent = mensajeDesencriptado;
resultadotitulo.textContent = "El Resultado es:"
botoncopiar.classList.remove("hidden");
});

botoncopiar.addEventListener('click',()=>{
    let textocopia = textoresultado.textContent;
    navigator.clipboard.writeText(textocopia).then(()=>{
        console.log('Se copio el texto: ${textocopia}')
        imagenencri.style.display = "block";
        loaderc.classList.add("hidden");
        resultadotitulo.textContent = "El texto se copio correctamente"
        botoncopiar.classList.add("hidden");
        textoresultado.textContent = [];
    })
})
