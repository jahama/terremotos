Lungo.ready(function() {

 
	cargarDatos();

	
	
	/* ===============================
		    VISTA DE DETALLE
	================================= */

    /*  
		
    */
	Lungo.dom('.arrow a').tap(function() {
	   var  id = this.getAttribute("data-id");
	   var terremoto = Lungo.dom(this);

	  // sessionStorage.setItem('id', id);
	   //Lungo.Data.Storage.session("id", null);
	   Lungo.Data.Storage.session("id", id);
	   
	});

	Lungo.dom('#detalle_terremoto').on("load", function(event) {
		//  Lungo.Core.log(1,event );
		  Lungo.Core.log(1,Lungo.Data.Storage.session("id") );
		  //
		  setTimeout(function(){
			  var id =  Lungo.Data.Storage.session("id");
			  Lungo.Data.Sql.select('terremotos', {id: id}, infoTerremoto);
		},10);

		
	});

		// Select
	var infoTerremoto = function(data){
		//console.log(data);

	  //  for(var i = 0, len = data.length; i < len; i++){
	       // Lungo.Core.log(1,data[0].title + ' - '+ data[0].id + ' - '+ data[0].pubDate + ' - ');

	        var date = new Date(data[0].pubDate);

	     //   console.log("fecha " + date.toTimeString());

	        $$('#detalle_nombre .info_terremoto h2').text(data[0].title);
	        $$('#detalle_nombre  [data-icon=calendar] .calendar').text(date.getMonth()+ '/' +date.getFullYear()); 
	        $$('#detalle_nombre  [data-icon=clock] .clock').text(date.getHours()+ ':' + date.getMinutes());
	      //  console.log( $$('#detalle_nombre .mas_info_terremoto '));
	        $$('#detalle_nombre .mas_info_terremoto ').html(data[0].description);

	        $$('#detalle_nombre .right.tag.blue ').html(data[0].magnitude);


	       

	        /* ============================
	   				CARGAR EL MAPA
			  ============================ */
	       if (navigator.geolocation) {
	       		console.log(" carga el mapa ");
				navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);
			}

			function geo_success(position) {
			
			// Obtengo la posicion	
			 var _miPos = {
			  	latitude:data[0].latitud,
			  	longitude:data[0].longitud
			  };
			
			  
			 Lungo.Sugar.GMap.init({
		            el: '#mapaTerremoto',
		            zoom: 3,
		            center: _miPos
		        });

			// marcador 
			var marcador = Lungo.Sugar.GMap.addMarker(_miPos, null, false);
			// añado un mensaje para mostrar con el marcador 
			marcador.title= data[0].title;

            Lungo.Sugar.GMap.center(_miPos);

			}
			 
			function geo_error() {
			  alert("Sorry, no position available.");
			}
			 
			var geo_options = {
			  enableHighAccuracy: true, 
			  maximumAge        : 30000, 
			  timeout           : 27000,
			 
			};
	};



	/* =================
		    MAPAS
	==================== */

	
			// JavaScript Code
	Lungo.dom('#mapa').on('load', function(event) {


		Lungo.Data.Sql.select('terremotos', null, function(data){
			//console ( " empezar a pintar los terremotos ");
			    if (navigator.geolocation) {
						navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);
				}

				function geo_success(position) {

				
				  var listaPosiciones=[];

				   Lungo.Sugar.GMap.init({
					            el: '#mapa',
					            zoom: 3,
					            center: _miPos
					        });

					for (var i=0;i<20;i++){
					// Obtengo la posicion	
						 var _miPos = {
						 	latitude:data[i].latitud,
						 	longitude:data[i].longitud,
						  	
						  };
						 
						 listaPosiciones.push(_miPos);

						 var marcador = Lungo.Sugar.GMap;
						 marcador.addMarker(_miPos, null, false);
						 marcador.title=data[i].title +' /' + data[i].latitud + ' :: ' + data[i].longitud  ;
						 marcador.center(_miPos);
					     

					}
						

					}
					 
					function geo_error() {
					  alert("Sorry, no position available.");
					}
					 
					var geo_options = {
					  enableHighAccuracy: true, 
					  maximumAge        : 30000, 
					  timeout           : 27000,
					 
					};
				})
					

	});

/* ===================================================================
		   NOTIFICACION EN LA PAGIAN DE DETALLE DEL TERREMOTO
  ====================================================================== */

	Lungo.dom('#detalle_terremoto .button').on("singleTap", function(event) {
    	var notificcion = "";
    	// 
    	notificcion += '<a href="#" class="button anchor" data-icon="twitter" data-label="Normal" data-action="normal"><span class="icon brand twitter"></span><abbr>Twitter</abbr></a>';
    	notificcion += '<a href="#" class="button anchor" data-label="Normal" data-action="normal"><span class="icon brand facebook"></span><abbr>Facebook</abbr></a>';
    	notificcion += '<a href="#" class="button anchor" data-label="Normal" data-action="normal"><span class="icon brand google-plus"></span><abbr>Google Plus</abbr></a>';

    	Lungo.Notification.html(notificcion, "Close");
	});




/* ============================================================
    Eventos de la pantalla de las opciones de configuracion 
  ============================================================= */

	$$('article#op_config #actualizar').on("change", function(event) {
	         
	         var conf_actual = Lungo.Data.Storage.persistent('conf_actualizacion');
	        
	         var actualizar = ($$(this).attr('value') == "1") ? true : false;
	       

	         var conf_nueva =  {act_auto: actualizar, act_intervalo: conf_actual.act_intervalo};

   			 Lungo.Data.Storage.persistent('conf_actualizacion',conf_nueva);

   			 	if (conf_nueva.act_auto){ // Si tiene a "true" la actualizacion automatica se lanzara
   			 		 var actualizacion_id = setInterval(reFresh,conf_nueva.act_intervalo);
	   			   // guardo el identifador 
	   			    var actualizacion ={id:actualizacion_id}
	   			    Lungo.Data.Cache.set('actualizacion',actualizacion);

	      			// lanzar el temporizador
	      			function reFresh() {
	   					console.log(" Actualizacion automatica : acceder al servicio cada ", conf_nueva.act_intervalo );
	   					
	   					cargarDatos();

	   				}
                  	            
	      		}else{ // parar
	      			actualizacion = Lungo.Data.Cache.get('actualizacion');
	      			clearInterval(actualizacion.id);	
	      		}

	     
	});

	Lungo.dom('article#op_config select').on("change", function(event) {
	           var config_actual = Lungo.Data.Storage.persistent('conf_actualizacion');
	           // Valor del intervalo de actualizacion seleccionado por el usuario
	           var intervalo = 0;
	           switch (event.target.value){
		           

		           	case "1":intervalo = 60000;break;   // 
		           	case "2":intervalo = 300000;break; // 5 minutos
		           	case "3":intervalo = 900000;break;  // 15 minutos
		           	case "4":intervalo = 1800000 ;break; // 30 minutos
		           	case "5":intervalo = 3600000;break; // 1 hora
		           	case "100":intervalo = 5000;break; // 5 segundos (pruebas)
		           
	           }
	          

	           if (intervalo !== 0){
	   				 var conf_nueva =  {act_auto: config_actual.act_auto, act_intervalo: intervalo};
	   				 Lungo.Data.Storage.persistent('conf_actualizacion',conf_nueva);
		     
		      		if (conf_nueva.act_auto){ // Si tiene a "true" la actualizacion automatica se lanzara
		      			 var actualizacion_id = setInterval(reFresh,conf_nueva.act_intervalo);
	   			   // guardo el identifador 
	   			    var actualizacion ={id:actualizacion_id}
	   			    Lungo.Data.Cache.set('actualizacion',actualizacion);

	      			// lanzar el temporizador
		      			function reFresh() {
		   					console.log(" Actualizacion automatica : acceder al servicio cada ", conf_nueva.act_intervalo );
		   					
		   					cargarDatos();

		   				}
		      		}
		      	}

	     
	});

	Lungo.dom('article .form .button').on("tap", function(event) {
	         // console.log("select : actualziacion automatica ", $$("article#op_config select option"));
   		var conf_actualizacion =  {act_auto: false, act_intervalo: 3600};
   		Lungo.Data.Storage.persistent('conf_actualizacion',conf_actualizacion);
   		clearInterval(Lungo.Data.Cache.set('proceso_actualizacion'));
	     
	});


	
});