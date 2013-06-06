Lungo.ready(function() {
	
	Lungo.Core.log(1, "Launched event");
	
	cargarDatos();


	/* =================
		    MAPAS
	==================== */

	 var _from = { latitude: 59.32522, longitude: 18.07002 };
     var _to = { latitude: 59.327383, longitude: 18.06747 };
   //  var _miPosicion = { latitude: 43.321661999999996, longitude: -1.984993 };
    
  
  
	
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
			  
			 Lungo.Sugar.GMap.init({
		            el: '#mapa',
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
			

	});



	
});