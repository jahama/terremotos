Lungo.ready(function() {

	cargarDatos();
	
	/* ===============================
		    VISTA DE DETALLE
	================================= */


	Lungo.dom('.arrow a').tap(function() {
	   var  id = this.getAttribute("data-id");
	   var terremoto = Lungo.dom(this);


	//   console.log(" id guardado en session storage " + terremoto.attr('data-id'));
	  // sessionStorage.setItem('id', id);
	   Lungo.Data.Storage.session("id", id);
	   
	});

	Lungo.dom('#detalle_terremoto').on("load", function(event) {
		//  Lungo.Core.log(1,event );
		  Lungo.Core.log(1,Lungo.Data.Storage.session("id") );

		  var id =  Lungo.Data.Storage.session("id");
		  console.log(" identificador para la busqueda en BBDD " +  id)
		  Lungo.Data.Sql.select('terremotos', {id: id}, infoTerremoto);

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
			  console.log(position);
			  
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

				  console.log(data[0]);
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
						 console.log(" posicion : "); 
						 console.log(_miPos);
						 listaPosiciones.push(_miPos);

						 var marcador = Lungo.Sugar.GMap;
						 marcador.addMarker(_miPos, null, false);
						 marcador.title=data[i].title +' /' + data[i].latitud + ' :: ' + data[i].longitud  ;
						 marcador.center(_miPos);
					     

					}
						

							console.log(listaPosiciones[0]);
							/*
								Lungo.Sugar.GMap.addMarker(listaPosiciones[1], null, false);
								 Lungo.Sugar.GMap.addMarker(listaPosiciones[2], null, false);
								Lungo.Sugar.GMap.addMarker(listaPosiciones[2], null, false);
								// añado un mensaje para mostrar con el marcador 
								//marcador.title= data[i].title + ' / ' + data[i].longitud + ' : ' + data[i].latitud ;

								
								
								//console.log(marcador);
					            Lungo.Sugar.GMap.center(_miPos);
					            Lungo.Sugar.GMap.zoom(3);
					  
*/

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



	
});