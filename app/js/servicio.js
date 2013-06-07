var cargarDatos = function() {

	Lungo.Core.log(1," acceso al servicio cargar datos ");

	var url = "datos/earthquake.xml";
	var data = {};
	var listadoTerremotos=[];

		/* =====================================================================
			FUNCION DE CALLBACK DE LA PETICION AJAX PARA OBTENER TERRMOTOS 
	     ====================================================================== */
	var parseResponse = function(result){

		var terremotos = result.getElementsByTagName('item');
		console.log(" datos que se reciben del servicio web ");
	    Lungo.Core.log(1,terremotos);

		
		for (var i = 0; i < terremotos.length; i++)
		 {

		  // id
		  var idTerremoto = terremotos[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue; 
		  	  idTerremoto = Date.parse(idTerremoto)/1000; 
		    //  console.log(idTerremoto);

		  	
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
		  //Console.log(longitud);
		  var magnitud = terremotos[i].getElementsByTagName("magnitude")[0].childNodes[0].nodeValue; 
		  //console.log(magnitud);
		   var magnitud_re = magnitud.replace(/[A-Z]/gi, ' ');
		   //
		  var masInfo = terremotos[i].getElementsByTagName("guid")[0].childNodes[0].nodeValue; 
		  //console.log(masInfo);
		   //
		  var profundidad = terremotos[i].getElementsByTagName("depth")[0].childNodes[0].nodeValue; 
		  //console.log(profundidad);
		    //
		  var descripcion = terremotos[i].getElementsByTagName("description")[0].childNodes[0].nodeValue; 
		 // console.log(descripcion);
		  var descripcion_re = descripcion.replace(/"/g, '\\""');
			// console.log(descripcion_re);      //mother-in_law
		    
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
              magnitude: magnitud_re,
              guid : masInfo,
              depth : profundidad,
              description: descripcion_re,
              pubDate: fecha_ts
			    }
			];

  			//Lungo.Data.Sql.insert('terremotos', terremoto);



			};

			// consulta para obtener todos los terremotos 
			
			var infoTerremotos = function(data){

		    	for(var i = 0, len = data.length; i < len; i++){
				     // console.log(data[i].title + ' - '+ data[i].latitud + ' - '+ data[i].longitud + ' - ');
				    /*  
				     var elemento = $$('#listado ul').append('<li> </li> ');
				         elemento.find('li').addClass('arrow');
				     */   
				         
				    // console.log(elemento);
				     $$('#listado ul').append('<li class="arrow"><a href="#detalle_terremoto" data-router="section"  data-id="'+ data[i].id +'" ><div class="left tag blue">'+ data[i].magnitude +'</div><strong>'+ data[i].title +'</strong></a> <small>'+ new Date(data[i].pubDate  * 1000)+'</small></li> ');
				     $$('#buscador ul').append('<li class="arrow"><a href="#detalle_terremoto" data-router="section" data-id="'+ data[i].id +'" ><div class="left tag blue">'+ data[i].magnitude +'</div><strong>'+ data[i].title +'</strong></a> <small>'+ new Date(data[i].pubDate  * 1000)+'</small></li> ');
				        
				    }
			}
				   

			Lungo.Data.Sql.select('terremotos', null, infoTerremotos);
				

	   
	};

	// Cargar los datos desde el servicio
	Lungo.Service.get(url, data, parseResponse, "xml");

};

