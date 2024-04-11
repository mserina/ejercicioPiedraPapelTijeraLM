/**
 * 
 */

 function Piedra(){
	 
	 
	 
	 const opciones = ["PIEDRA", "PAPEL","TIJERAS"];
	 
	 let numeroAleatroo= Math.trunc(Math.random() * 3);
	/* var elementoConcreto = opciones[numeroAleatroo]; */
	  
	/* for(let i=0; i < opciones.length; i++){*/

		 switch(numeroAleatroo){
			 case 0:
				 alert("EMPATE");
				 alert(opciones[numeroAleatroo]);
				 break;
			case 1:
				 alert("HA PERDIDO");
				 alert(opciones[numeroAleatroo]);
				break;
			case 2:
				 alert("HA GANADO");
				 alert(opciones[numeroAleatroo]);
				break;
		/* }*/
		 
	 }
	 
	 
	 
	 
 
 
  function Papel(){
	 
	 const respuestaUsuario = prompt("INSERTE: PIEDRA, PAPEL, O TIJERA");
	 
	 const opciones = ["PIEDRA", "PAPEL","TIJERAS"];
	 
	 let numeroAleatroo= Math.random() * 3;
	 for(let i; i < opciones.length; i++){
		 
		 if(opciones){
			 
		 }
	 }
	 
	 alert(numeroAleatroo);
	 
	 
	 
 }
 
 }