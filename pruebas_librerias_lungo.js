/*********************************************************************/
	/************** PRUEBAS CON LAS LIBRERIAS DE LUNGO *******************/
	/*********************************************************************/
	/*
	 // ==============================
	 // 4.2 .execute()
	 // ==============================
	var myFunc = function(){
    	Lungo.Core.log(1," soy la funcion 1");
	};
	var myFunc2 = function(){
	    Lungo.Core.log(1," soy la funcion 2");	
	};


	// ==============================
	 // 4.3 .bind()
	 // ==============================

	  // Crea una nueva función que, cuando es llamada, ella misma llama a esta función en el contexto del valor proporcionado, 
	  // con una secuencia dada de argumentos precediendo cualquiera proporcionado cuando la nueva función es llamada.	
	var example = "This is ";
	var addText = function(textToAdd){
	    text = this;
	    for(var i = 0, len = textToAdd.length; i < len; i++){
	        text += " " + textToAdd[i];
	    }
	    return text;
	};
	var text = ["an", "example"];
	var finalText = Lungo.Core.bind(example, addText)(text);
	console.log(finalText);
	//Result: "This is an example"


	 // ==============================
	 // 4.5 .isOwnProperty()
	 // =============================
		var car = {wheels:4,doors:true};
		Lungo.Core.log(1,Lungo.Core.isOwnProperty(car,"wheels"));
		//Result: true
		Lungo.Core.log(1,Lungo.Core.isOwnProperty(car,"wings"));
		//Result: false

	// ==============================
	 // 4.7 .toArray()
	 // =============================
	 	
		var execute = 	function() {
			Lungo.Core.log(1, " ejemplo toArray");
			var args = Lungo.Core.toArray(arguments);
			console.log(args);
		}
		execute();

	// ==============================
	 // 4.9 .environment()
	 // =============================	

		Lungo.Core.log(1,Lungo.Core.environment());

	// ==============================
	 // 4.10 .orderByProperty()
	 // =============================	
		var list = [
		    {name: 'Lungo', twitter: 'lungojs'},
		    {name: 'Quojs', twitter: 'quojs'},
		    {name: 'Quojs2', twitter: 'quojs2'}
		];
		Lungo.Core.log(1,list);
		var ordered_list = Lungo.Core.orderByProperty(list, 'name', 'asc');
		Lungo.Core.log(1,ordered_list);



	 // ==============================
	 //4.11 .parseUrl()
	 // ==============================	
	 var url = Lungo.Core.parseUrl("http://tapquo.com/#folks");
	 Lungo.Core.log(1,url);

	 // ==============================
	 //	4.12 .findByProperty()
	 // ==============================	
	 	var list = [
		    {name: 'Lungo', twitter: 'lungojs'},
		    {name: 'Quojs', twitter: 'quojs'},
		];
		var user = Lungo.Core.findByProperty(list, 'name', 'Lungo');

		 Lungo.Core.log(1,user);
	*/
	/*********************************************************************/
	/************** /PRUEBAS CON LAS LIBRERIAS DE LUNGO ******************/
	/*********************************************************************/
	