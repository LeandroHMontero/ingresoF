/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexoTitular;
	let lugarDestino;
	let mayorLugarDestino;
	let temporadaViaje;
	let cantidadPersonas;
	let mayorCantidadPersonas;
	let sexoTitularMasPasajeros;
	let promedioPersonasInvierno;
	let respuesta;
	let contBariloche = 0;
	let contSalta = 0;
	let contCataratas = 0;
	let contViajePersonasInvierno = 0;
	let acumPersonasViajeInvierno=0;
	let flagCantidadPasajeros=0;

 do{
	sexoTitular = prompt('Ingrese el sexo del titular: "masculino" o "femenino" (sin comillas) ');
	sexoTitular = sexoTitular.toLowerCase();
	
	while(sexoTitular!="masculino" && sexoTitular!="femenino")
	{	
		sexoTitular = prompt('Dato incorrecto. Ingrese el sexo del titular: "masculino" o "femenino" (sin comillas) ');
		sexoTitular = sexoTitular.toLowerCase();
	}

	lugarDestino = prompt('Ingrese el lugar de destino: "Bariloche","Cataratas" o "Salta"(sin comillas)');
	lugarDestino = lugarDestino.toLowerCase();
	while(lugarDestino!="bariloche" && lugarDestino!="cataratas" && lugarDestino!="salta")
	{
		lugarDestino = prompt('Destino incorrecto. Ingrese "Bariloche","Cataratas" o "Salta"(sin comillas)');
		lugarDestino = lugarDestino.toLowerCase();
	}

	temporadaViaje = prompt('Ingrese la temporada del viaje: "otoño","invierno","verano" o "primavera" ');
	temporadaViaje = temporadaViaje.toLowerCase();

	while(temporadaViaje!="otoño" && temporadaViaje!="invierno" 
	&& temporadaViaje!="verano" && temporadaViaje!="primavera")
	{
	temporadaViaje = prompt('Temporada de viaje incorrecta. Ingrese "otoño","invierno","verano" o "primavera" ');
	temporadaViaje = temporadaViaje.toLowerCase();
	}

	cantidadPersonas = parseInt(prompt("Ingrese la cantidad de pasajeros que viajan(numero mayor a 0)"));
	while(cantidadPersonas<=0 || isNaN(cantidadPersonas)){
		cantidadPersonas = parseInt(prompt("Dato invalido. Ingrese la cantidad de pasajeros que viajan(numero mayor a 0)"));
	}


	//Cuento las veces que un destino fue elegido
	if(lugarDestino=="bariloche")
	{
		contBariloche++;
	}
	else if (lugarDestino=="cataratas")
	{
		contCataratas++;
	}
	else{
		contSalta++;
	}

	/*Utilizo un flag para corroborar si ingreso por primera vez la cantidad de pasajeros
	luego comparo en la proxima iteracion si el valor de la variable "cantidadPersonas"
	es mayor que el que almacene la primera vez en la variable "mayorCantidadPersonas*/

	
	if(flagCantidadPasajeros==0 || cantidadPersonas>mayorCantidadPersonas)
	{
		mayorCantidadPersonas = cantidadPersonas;
		sexoTitularMasPasajeros = sexoTitular;
		flag = 1;
	}

	//Si la temporada de viaje es "invierno" acumulo la cantidad de personas que viajan
	if(temporadaViaje=="invierno")
	{
		acumPersonasViajeInvierno+=cantidadPersonas;
		contViajePersonasInvierno++;
	}

	respuesta = prompt('Para ingresar mas pasajeros escriba "si", de lo contrario escriba "no"(sin comillas)');
	respuesta = respuesta.toLowerCase();
	while(respuesta!="si" && respuesta!="no")
	{
		respuesta = prompt('Opcion incorrecta. Para agregar mas pasajeros escriba "si", de lo contrario escriba "no"(sin comillas)');
		respuesta = respuesta.toLowerCase();
	}
}while(respuesta=="si");



if(contBariloche>contCataratas && contBariloche>contSalta)
{
	mayorLugarDestino = "Bariloche";
}
else if(contCataratas>contSalta && contCataratas>=contBariloche)
{
	mayorLugarDestino = "Cataratas";
}
else{
	mayorLugarDestino = "Salta";
}

promedioPersonasInvierno = acumPersonasViajeInvierno/contViajePersonasInvierno;

alert("El lugar mas elegido es " + mayorLugarDestino);
alert("El sexo del titular con mas pasajeros es " + sexoTitularMasPasajeros);
alert("El promedio de personas por viaje en invierno es de " + 
promedioPersonasInvierno + " personas");

}
