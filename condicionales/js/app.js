function calcular(){
    let modo;
    let virtual=false
    let presencial=false
    let nombre=document.getElementById('nombre').value;
    if (!nombre){
     mensaje("Nombre")
    }
    let materia=document.getElementById('materia').value;
    if (!materia){
        mensaje("Materia")
       }
    virtual=document.querySelector('#virtua').checked;
    presencial=document.querySelector('#presencial').checked;
    if(virtual && !presencial){
        mensaje("Modalidad educativa");
    }

 if (virtual){
        modo="virtual"
    
    }

    if (presencial){
        modo="presencial";
    }
  let nota1=document.getElementById('nota1').value
  let nota2=document.getElementById('nota2').value
  let nota3=document.getElementById('nota3').value
  let nota4=document.getElementById('nota4').value
  document.getElementById('promedio').value=(parseInt(nota1)+parseInt(nota2)+parseInt(nota3)+parseInt(nota4))/4
}
let nota1 = document.getElementById('nota1').value
    if (!nota1) {
        mensaje("Nota 1")
    }
    let nota2 = document.getElementById('nota2').value
    if
        (!nota2) {
        mensaje("Nota 2")
    }
    let nota3 = document.getElementById('nota3').value
    if (!nota3) {
        mensaje("Nota 3")
    }
    let nota4 = document.getElementById('nota4').value
    if (!nota4) {
        mensaje("Nota 4")
    }
    document.getElementById('promedio').value = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)) / 4
    let promedio = document.getElementById('promedio').value
    let resultado 
    if (promedio <= 0-40 ) {
        resultado= "Reprobado"
    }
    if (promedio >= 41-69 ) {
        resultado= "Debe mejorar"
    }
    if (promedio >= 71-100 ) {
        resultado= "Aprobado"
    }
    document.getElementById('promedio').value +=" "+resultado

function mensaje(campo){
    Swal.fire({
        icon:"error",
        title:"Campos obligatorios",
        text:"el campo" +campo+" esta vacio",
    });
}

