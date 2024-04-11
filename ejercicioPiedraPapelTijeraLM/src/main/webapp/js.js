/**
 * 
 */

 function Piedra(){
	 
	 
	 
	 const opciones = ["PIEDRA", "PAPEL","TIJERAS"];
	 
	 let numeroAleatroo= Math.trunc(Math.random() * 3);
	

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
	 }
	 
	 
 
  function Papel(){
	 
	const EMPATE = ["PIEDRA", "PAPEL","TIJERAS"];
	 
	 let numeroAleatroo= Math.trunc(Math.random() * 3);
	

		 switch(numeroAleatroo){
			 case 0:
				 alert("HA GANADO");
				 alert(opciones[numeroAleatroo]);
				 break;
			case 1:
				 alert("EMPATE");
				 alert(opciones[numeroAleatroo]);
				break;
			case 2:
				 alert("HA PERDIDO");
				 alert(opciones[numeroAleatroo]);
				break;
 		}
	 }
	 
	 function Tijera(){
		 
		 const opciones = ["PIEDRA", "PAPEL","TIJERAS"];
	 
	 let numeroAleatroo= Math.trunc(Math.random() * 3);
	

		 switch(numeroAleatroo){
			 case 0:
				 alert("HAS PERDIDO");
				 alert(opciones[numeroAleatroo]);
				 break;
			case 1:
				 alert("HAS GANADO");
				 alert(opciones[numeroAleatroo]);
				break;
			case 2:
				 alert("EMPATE");
				 alert(opciones[numeroAleatroo]);
				break;
	 }	
 }
 
 