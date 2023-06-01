

function calcularPrecioFinal(){
    // en cantEntradas almaceno la cantidad de entradas que ingreso el usuario
   let cantEnt= document.getElementById("cantEntradas").value;

   console.log("cantidad de entradas" + cantEnt);
   // en desc almaceno el tipo de usuario y el descuento que elijio el usuario 
   let desc = document.getElementById("porcDescuento").value;


   console.log("el descuento es de" + desc);

    // obtengo el descuento que hay que realizar
   let descTotal = (cantEnt*1000) *desc/100;

 // resto el descuento total del precio total
   let precioFin= (cantEnt*1000) - descTotal;

   //coloco el precio total en el html el valor de las entradas- el descuento
   document.getElementById("precioFinal").value=precioFin;
   // Otra Forma
   //document.getElementById("precioFinal2").innerHTML=precioFin;

}