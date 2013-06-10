

	Lungo.dom('#buscador').on("keyup", function(event){
	
		var texto = $$('#buscador input').val();
		var sql = 'SELECT * FROM terremotos  WHERE title LIKE "%' + texto + '%"';
		var lista = "";


			    Lungo.Data.Sql.execute(sql, function(data){
	  			for (var i=0;i<data.rows.length;i++){
	  				lista +='<li class="arrow"><a href="#detalle_terremoto" data-router="section" data-id="'+ data.rows.item(i).id +'" ><div class="left tag blue">'+ data.rows.item(i).magnitude +'</div><strong>'+ data.rows.item(i).title +'</strong></a> <small>'+ new Date(data.rows.item(i).pubDate  * 1000)+'</small></li> ';
	  			}

	  			 $$('#buscador ul').html(lista); 
	 	   });

	 	   

	});


 Lungo.dom('.selectMagnitud').on("change", function(event){
	
		var mag = $$('.selectMagnitud').val();
		var mag_sup  = parseFloat(mag)+parseFloat(1);
		var sql_todos = 'SELECT * FROM terremotos ORDER BY magnitude DESC'
		var sql = 'SELECT * FROM terremotos  WHERE (magnitude > '+ mag +') AND  (magnitude < '+ mag_sup  +')   ORDER BY magnitude DESC';
		
		var lista="";

			if (mag == 0) { // Devolver todos 
				// Lungo.Data.Sql.select('terremotos',null,dameTerremotos);
				Lungo.Data.Sql.execute(sql_todos, dameTerremotos);
			} else{
				// Lungo.Data.Sql.select('terremotos',{magnitude:mag}, dameTerremotos);
				  Lungo.Data.Sql.execute(sql, dameTerremotos);
			}




	});


  var dameTerremotos = function(data){
  	var mag = $$('.selectMagnitud').val();
		//var sql = 'SELECT * FROM terremotos  WHERE magnitude LIKE "%' + texto + '%"';
		var lista="";

		  			for(var i = 0, len = data.rows.length; i < len; i++){
					   
					     //$$('#listado ul').append('<li class="arrow"><a href="#detalle_terremoto" data-router="section"  data-id="'+ data[i].id +'" ><div class="left tag blue">'+ data[i].magnitude +'</div><strong>'+ data[i].title +'</strong></a> <small>'+ new Date(data[i].pubDate  * 1000)+'</small></li> ');
					     lista +='<li class="arrow"><a href="#detalle_terremoto" data-router="section" data-id="'+ data.rows.item(i).id +'" ><div class="left tag blue">'+ data.rows.item(i).magnitude +'</div><strong>'+data.rows.item(i).title +'</strong></a> <small>'+ new Date(data.rows.item(i).pubDate  * 1000)+'</small></li> ';
					        
					    }

					   $$('#buscador ul').html(lista); 
		 	   }


  

