var nombre = document.getElementById("form-forename");
var apellido = document.getElementById("form-surname");
var email = document.getElementById("form-email");
var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
var seleccion = document.getElementById("ckeck");
var formulario = document.getElementById("formulario");

function validarFormulario() {
   var mensajeError = [];
   let infoCompleta = true;

   
   if (nombre.value === "" || /^\s+$/.test(nombre.value)) {
      mensajeError.push("Debe ingresar un nombre válido");
      infoCompleta = false;
   }

   if (apellido.value === "" || /^\s+$/.test(nombre.value) ) {
      mensajeError.push("Debe ingresar un apellido");
      infoCompleta = false;

   }

   if (!validEmail.test(email.value)) {
      mensajeError.push("Debe ingresar un E-mail válido");
      infoCompleta = false;

   }

   if (intereses.selectedIndex == 0) {
      mensajeError.push("Debe seleccionar el servicio por el cual esta interesado.");
      infoCompleta = false;
   }
   
   if (infoCompleta === false) {
      Swal.fire({
         text: mensajeError.join(". "),
         icon: "error",
      });

   }

   if (infoCompleta === true){
      Swal.fire({
         title: "Muchas gracias",
         text: "Lo estaremos contactando a la brevedad",
         icon: "success",
   
      });
      {
         formulario.reset();
      }
   }
}


