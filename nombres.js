// CREAR UNA CLASE DE OBJETO
class miClaseUno {
	constructor(primero, segundo){// el constructor observa dos propiedades que después son llamadas mediante el término siguiente
		this.uno = primero;// propiedad uno
		this.dos = segundo;// propiedad dos
		this.tres = "Saludos amigos";// propiedad tres

	};

	miMetodoUno(){
		return this.uno;
	};

	miMetodoDos(parametroUno, parametroDos){
		document.write( 
			"El parametro UNO es: " + parametroUno +
			"<br>El parametro DOS es: " + parametroDos
			);

	};	
};

class miClaseDos extends miClaseUno{
	constructor(uno, dos, cuarto){
		super (uno, dos)
		this.cuatro = cuarto;



	};
};


var miObjetoTres = new miClaseDos("Rurmah", "Felicia", 5555555);
document.write( miObjetoTres.cuatro );


