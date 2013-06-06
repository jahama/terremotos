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
		  var idTerremoto = terremotos[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue; console.log(idTerremoto);
		  	
		  // Obtenemos el título
		  var titulo = terremotos[i].getElementsByTagName("title")[0].childNodes[0].nodeValue; console.log(titulo);
		  // enlace
		  var enlace = terremotos[i].getElementsByTagName("link")[0].childNodes[0].nodeValue; console.log(enlace);

		  // Insertar registros
		 var terremoto = [
    {
              id: 2222 ,
              title: titulo,
              link: enlace,
              latitud: 22.22,
              longitud : 33.33,
              guid : 'http://www.emsc-csem.org/Earthquake/earthquake.php?id=320316',
              depth : '11',
              description: '<table><tr><td><table cellpadding="0" cellspacing="0" border="0" style="margin-top:5px; font-size:11px;"><tr><td style="padding-right:4px">Magnitude</td><td class="point2">  ML 2.0</td></tr><tr><td style="padding-right:4px">Region</td><td class="point2">  SICILY, ITALY</td></tr><tr><td style="padding-right:4px">Date time</td><td class="point2">  2013-06-04   20:03:15.0 UTC</td></tr><tr><td style="padding-right:4px">Location</td><td class="point2">  38.44 N ; 15.34 E</td></tr><tr><td style="padding-right:4px">Depth</td><td class="point2">  114 km</td></tr></table></td></tr></table>',
              pubDate: 'Tue, 04 Jun 2013 20:12:00 +0000'
    }
];

 // Lungo.Data.Sql.insert('terremotos', terremoto);



		};

	   
	};

	// Cargar los datos desde el servicio
	Lungo.Service.get(url, data, parseResponse, "xml");

};

