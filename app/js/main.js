Lungo.ready(function() {

	Lungo.Core.log(1, "Launched event");
	cargarDatos();
	
	/* ===============================
		    VISTA DE DETALLE
	================================= */


	$$('.arrow a').tap(function() {
	   var  id = this.getAttribute("data-id");
	   sessionStorage.setItem('identificador', id);
	   
	});

	Lungo.dom('#detalle_terremoto').on("load", function(event) {
		  Lungo.Core.log(1,event );
		  Lungo.Core.log(1,sessionStorage.getItem('identificador') );

		  var identificador = sessionStorage.getItem('identificador');
		  Lungo.Data.Sql.select('terremotos', {id: identificador}, infoTerremoto);

	});

		// Select
	var infoTerremoto = function(data){

	    for(var i = 0, len = data.length; i < len; i++){
	        Lungo.Core.log(1,data[i].title + ' - '+ data[i].latitud + ' - '+ data[i].pubDate + ' - ');

	        $$('#detalle_nombre .info_terremoto h2').text(data[i].title);
	      //  $$('#detalle_nombre .info_terremoto .calendar').text(data[i].pubDate);
	      //  $$('#detalle_nombre .info_terremoto .clock').text(hora_);
	        


	       // cargar el mapa
	       console.log(" cargando el mapa ");

	       if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);
			}

			function geo_success(position) {


			// Obtengo la posicion	
			 var _miPos = {
			  	latitude:position.coords.latitude,
			  	longitude:position.coords.longitude
			  };
			  console.log(" mi posicion " +position);
			  
			 Lungo.Sugar.GMap.init({
		            el: '#mapaTerremotos',
		            zoom: 14,
		            type: 'HYBRID',
		            center: _miPos
		        });

			// marcador 
			var marcador = Lungo.Sugar.GMap.addMarker(_miPos, null, false);
			// añado un mensaje para mostrar con el marcador 
			marcador.title= " Hola que tal !!!!!"

			console.log(marcador);
            Lungo.Sugar.GMap.center(_miPos);
            Lungo.Sugar.GMap.zoom(14);



			}
			 
			function geo_error() {
			  alert("Sorry, no position available.");
			}
			 
			var geo_options = {
			  enableHighAccuracy: true, 
			  maximumAge        : 30000, 
			  timeout           : 27000,
			 
			};

	      }

	};


	

	
	
	

	/* =================
		    MAPAS
	==================== */

	
			// JavaScript Code
	Lungo.dom('#mapa').on('load', function(event) {
	    if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);
		}
		
			function geo_success(position) {

			// Obtengo la posicion	
			 var _miPos = {
			  	latitude:position.coords.latitude,
			  	longitude:position.coords.longitude
			  };

			   var _miPos2 = {
			  	latitude:position.coords.latitude+2,
			  	longitude:position.coords.longitude
			  };

			   var _miPos3 = {
			  	latitude:position.coords.latitude,
			  	longitude:position.coords.longitude+2
			  };
			  
			 Lungo.Sugar.GMap.init({
		            el: '#mapa',
		            zoom: 4,
		            type: 'HYBRID',
		            center: _miPos
		        });

				// marcador 
				
					var marcador = Lungo.Sugar.GMap.addMarker(_miPos, null, false);
					// añado un mensaje para mostrar con el marcador 
					marcador.title= " Hola que tal !!!!!"

					var marcador2 = Lungo.Sugar.GMap.addMarker(_miPos2, null, false);
					// añado un mensaje para mostrar con el marcador 
					marcador2.title= " Hola que tal 2!!!!!"

					var marcador3 = Lungo.Sugar.GMap.addMarker(_miPos3, null, false);
					// añado un mensaje para mostrar con el marcador 
					marcador3.title= " Hola que tal 3!!!!!"

					//console.log(marcador);
		           // Lungo.Sugar.GMap.center(_miPos);
		            Lungo.Sugar.GMap.zoom(4);
		       


			}
			 
			function geo_error() {
			  alert("Sorry, no position available.");
			}
			 
			var geo_options = {
			  enableHighAccuracy: true, 
			  maximumAge        : 30000, 
			  timeout           : 27000,
			 
			};
			

	});



	
});