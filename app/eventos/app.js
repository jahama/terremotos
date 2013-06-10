Lungo.ready(function() {

	console.log(" aplicacioin cargada ");
   
   /*
		Comprobar la configuracion del usuario cuando carga la aplicacion

		act_auto      : actualizacion automatica 
		act_intervalo :  
   */
   
 
	var  proceso_actualizacion;
  	// 
   	if (Lungo.Data.Storage.persistent('conf_actualizacion')){
   		// Si tiene la configuracion guardada hay que comprobar sus valores y tratarlos
   		
   		var config = Lungo.Data.Storage.persistent('conf_actualizacion');
   		var intervalo = config.act_intervalo ;
   		
      		if (config.act_auto){ // Si tiene a "true" la actualizacion automatica se lanzara
         			 var actualizacion_id = setInterval(reFresh,config.act_intervalo);
                  // guardo el identifador 
                   var actualizacion ={id:actualizacion_id}
                   Lungo.Data.Cache.set('actualizacion',actualizacion);

                  // lanzar el temporizador
                  function reFresh() {
                     // Actualizar el servicio
                     
                  }
                       
      		}else{
      			clearInterval(proceso_actualizacion);
      		}	



   	}else{
   		console.log(" NO existe --> Creearla ");
   		var conf_actualizacion =  {act_auto: false, act_intervalo: 0};
   		Lungo.Data.Storage.persistent('conf_actualizacion',conf_actualizacion);
         // Para el contador si estuviera en marcha 
   	}

});