/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/

function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let precioLiquidoCaro;
  let marcaLiquidoCaro;
  let precioSolidoBarato;
  let marcaSolidoBarato;
  let respuesta;
  let pesoTotalCompra=0;
  let flagLiquidos = 0;
  let flagSolidos = 0;

  do{
    marca = prompt("Ingrese la marca del producto");
    precio = parseFloat(prompt("Ingrese el precio del producto(numero mayor a 0)"));
    while(precio<=0 || isNaN(precio))
    {
      precio = parseFloat(prompt("Dato incorrecto. Ingrese el precio del producto(numero mayor a 0"));
    }

    peso = parseFloat(prompt("Ingrese el peso del producto(numero mayor a 0)"));
    while(peso<=0 || isNaN(peso))
    {
      peso = parseFloat(prompt("Dato incorrecto. Ingrese el precio del producto(numero mayor a 0"));
    }
    
    tipo = prompt('Ingrese el tipo de producto: escribir "solido" o "liquido" (sin comillas) ');
    tipo = tipo.toLowerCase();
    while(tipo!="solido" && tipo!="liquido")
    {
      tipo = prompt('Tipo de producto incorrecto. Escribir "solido" o "liquido" (sin comillas) ');
      tipo = tipo.toLowerCase();
    }

    //Acumulo los pesos de todos los productos que el usuario ingrese
    pesoTotalCompra+=peso;

    if(tipo == "solido" && (flagSolidos == 0 || precio<precioSolidoBarato))
    {
      precioSolidoBarato = precio;
      marcaSolidoBarato = marca;
      flagSolidos = 1;
    }
    else if (tipo=="liquido" && (flagLiquidos == 0 || precio>precioLiquidoCaro))
    {
      precioLiquidoCaro = precio;
      marcaLiquidoCaro = marca;
      flagLiquidos = 1;
    }
    
    respuesta=prompt('Para ingresar mas productos escriba "si", de lo contrario escriba "no"(sin comillas)');
    respuesta = respuesta.toLowerCase();
    while(respuesta != "si" & respuesta != "no")
    {
      respuesta=prompt('Opcion incorrecta. Escriba "si" para ingresar mas productos, de lo contrario escriba "no"(sin comillas)');
      respuesta = respuesta.toLowerCase();
    }

  }while(respuesta=="si");

  alert("El peso total de la compra es de " + pesoTotalCompra + " KG");
  alert("El producto mas caro de los liquidos es el de la marca " + marcaLiquidoCaro);
  alert("El producto mas barato de los solidos es el de la marca " + marcaSolidoBarato);

}
