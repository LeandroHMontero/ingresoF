/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let pesoPersona;
	let sexo;
	let edad;
	let promedioEdad;
	let hombreMasPesado;
	let nombreHombreMasPesado;
	let acumEdadPersonas=0;
	let contCantidadMujeres = 0;
	let flagHombreMasPesado = 0;

	for (i=0;i<5;i++)
	{
		nombre = prompt("Ingrese el nombre de la persona");
		pesoPersona = parseFloat(prompt("Ingrese el peso de la persona(mayor a 0)"));
		while(pesoPersona<=0 || isNaN(pesoPersona))
		{
			pesoPersona = parseFloat(prompt("Dato invalido. Ingrese nuevamente el peso de la persona"));
		}
		sexo = prompt("Ingrese el sexo de la persona: m o f");
		sexo = sexo.toLowerCase();
		while(sexo!="m" && sexo!="f")
		{
		sexo = prompt("Tipo de dato invalido. Ingrese el sexo de la persona: m o f");
		sexo = sexo.toLowerCase();	
		}
		edad = parseInt(prompt("Ingrese la edad de la persona"));
		while(edad<=0 || isNaN(edad))
		{
			edad = parseInt(prompt("Dato invalido. Ingrese nuevamente la edad de la persona"));
		}

		//Cuento la cantidad de veces que se ingresa a una persona femenina
		if(sexo=="f")
		{
			contCantidadMujeres++;
		}

		//Acumulo y sumo la edad de las 5 personas ingresadas
		acumEdadPersonas+=edad;

		
		if (sexo=="m" && (flagHombreMasPesado==0 || pesoPersona>hombreMasPesado))
		{
			hombreMasPesado = pesoPersona;
			nombreHombreMasPesado = nombre;
			flagHombreMasPesado = 1;
		}
				
	}

	promedioEdad = acumEdadPersonas/5;

	console.log("Hay " + contCantidadMujeres + " mujeres");
	console.log("La edad promedio de todas las personas es de " + promedioEdad);
	console.log("EL hombre mas pesado es " + nombreHombreMasPesado);


}
