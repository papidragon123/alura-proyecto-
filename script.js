const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar(){
    const TextoEncriptado = encriptar(inputTexto.value);
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value ="";
    }


function encriptar(stringEncriptado){

    let matrizCodigo = [["e","enter"],["i","ines"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    for(let i = 0; i < matrizCodigo.length ; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function copiar(){
    mensaje.Select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value=""
    alert("mensaje copiado")
}