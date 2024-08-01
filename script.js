let formulario = 
    document.querySelector(".formulario");
// funcão para aparecer o form
function aparecerFormulario(){
    formulario.computedStyleMap.left="50%";
}
//função para desaparecer o form
function desaparecerFormulario(){
    formulario.style="-50%";
}
