var cargarDatos = function() {

	Lungo.Core.log(1," acceso al servicio ");

	var url = "datos/earthquake.xml";
	var data = {};
	var listadoTerremotos=[];

	var parseResponse = function(result){

		var terremotos = result.getElementsByTagName('item');
	    Lungo.Core.log(1,terremotos[0]);

		
		for (var i = 0; i < terremotos.length; i++)
		 {

		  // id
		  var idTerremoto = terremotos[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue; 
		  	  idTerremoto = Date.parse(idTerremoto)/10000; 
		      console.log(idTerremoto);

		  	
		  // Obtenemos el título
		  var titulo = terremotos[i].getElementsByTagName("title")[0].childNodes[0].nodeValue; 
		  //console.log(titulo);
		  // enlace
		  var enlace = terremotos[i].getElementsByTagName("link")[0].childNodes[0].nodeValue; 
		  //console.log(enlace);
		  //
		   var latitud = terremotos[i].getElementsByTagName("lat")[0].childNodes[0].nodeValue; 
		   //console.log(latitud);
		  //
		  var longitud = terremotos[i].getElementsByTagName("long")[0].childNodes[0].nodeValue; 
		  //onsole.log(longitud);
		   //
		  var masInfo = terremotos[i].getElementsByTagName("guid")[0].childNodes[0].nodeValue; 
		  //console.log(masInfo);
		   //
		  var profundidad = terremotos[i].getElementsByTagName("depth")[0].childNodes[0].nodeValue; 
		  //console.log(profundidad);
		    //
		  var descripcion = terremotos[i].getElementsByTagName("description")[0].childNodes[0].nodeValue; 
		  //console.log(descripcion);
		    //  descripcion_es = 
		  //
		  var fecha = terremotos[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue; 
		  	  fecha_ts = Date.parse(fecha);
		//console.log(fecha_ts);
		  // Insertar registros
		 var terremoto = [
    		{
              id: idTerremoto ,
              title: titulo,
              link: enlace,
              latitud: latitud,
              longitud : longitud,
              guid : masInfo,
              depth : profundidad,
            //  description: descripcion,
              pubDate: fecha_ts
			    }
			];

  			//Lungo.Data.Sql.insert('terremotos', terremoto);



			};

			// consulta para obtener todos los terremotos 
			
			var infoTerremotos = function(data){

		    	for(var i = 0, len = data.length; i < len; i++){
				      console.log(data[i].title + ' - '+ data[i].latitud + ' - '+ data[i].longitud + ' - ');
				     var elemento = $$('#listado ul').append('<li> </li> ');
				         elemento.find('li').addClass('arrow');
				         
				         
				     console.log(elemento);
				     	 
				        
				    }
			}
				   

			Lungo.Data.Sql.select('terremotos', null, infoTerremotos);
				

	   
	};

	// Cargar los datos desde el servicio
	Lungo.Service.get(url, data, parseResponse, "xml");

};

