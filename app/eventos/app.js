Lungo.ready(function() {

	console.log(" aplicacioin cargada ");
   
   /*
		Comprobar la configuracion del usuario cuando carga la aplicacion

		act_auto      : actualizacion automatica 
		act_intervalo :  
   */
   	console.log($$('#op_config #actualizar').val());

 
	var  proceso_actualizacion;
  	// 
   	if (Lungo.Data.Storage.persistent('conf_actualizacion')){
   		// Si tiene la configuracion guardada hay que comprobar sus valores y tratarlos
   		
   		var config = Lungo.Data.Storage.persistent('conf_actualizacion');
   		var intervalo = config.act_intervalo * 100;
   		console.log(" existe ",config);
   		if (config.act_auto){ // Si tiene a "true" la actualizacion automatica se lanzara
   			console.log(" actualziacion automatica");
   			// lanzar el temporizador
   			function reFresh() {
				console.log(" acceder al servicio cada ", intervalo );
			}
			   proceso_actualizacion = setInterval(reFresh,intervalo);
   		}else{
   			clearInterval(proceso_actualizacion);
   		}	


   	}else{
   		console.log(" NO existe --> Creearla ");
   		var conf_actualizacion =  {act_auto: false, act_intervalo: 10};
   		Lungo.Data.Storage.persistent('conf_actualizacion',conf_actualizacion);
   	}

});