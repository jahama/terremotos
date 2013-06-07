
	Lungo.dom('#buscador').on("keyup", function(event){
	
		var texto = $$('#buscador input').val();
		var sql = 'SELECT * FROM terremotos  WHERE title LIKE "%' + texto + '%"';
		var lista = "";

		
		  console.log(sql);

			    Lungo.Data.Sql.execute(sql, function(data){
	  			console.log("ASDFÑASJFDLSADJ");
	  			console.log(data.rows);
	  			for (var i=0;i<data.rows.length;i++){
	  				console.log(data.rows.item(i));
	  				lista +='<li class="arrow"><a href="#detalle_terremoto" data-router="section" data-id="'+ data.rows.item(i).id +'" ><div class="left tag blue">'+ data.rows.item(i).magnitude +'</div><strong>'+ data.rows.item(i).title +'</strong></a> <small>'+ new Date(data.rows.item(i).pubDate  * 1000)+'</small></li> ';
	  			}

	  			 $$('#buscador ul').html(lista); 
	 	   });

	 	   

	});


 Lungo.dom('.selectMagnitud').on("change", function(event){
	
		var mag = $$('.selectMagnitud').val();
		var lista="";

		console.log(mag);


	 	    Lungo.Data.Sql.select('terremotos',{magnitude:mag}, function(data){
	  			console.log(" magnitude");
	  			console.log(data);

	  			for(var i = 0, len = data.length; i < len; i++){
				      console.log(data[i].title + ' - '+ data[i].latitud + ' - '+ data[i].longitud + ' - ');
				    /*  
				     var elemento = $$('#listado ul').append('<li> </li> ');
				         elemento.find('li').addClass('arrow');
				     */   
				         
				    // console.log(elemento);
				     //$$('#listado ul').append('<li class="arrow"><a href="#detalle_terremoto" data-router="section"  data-id="'+ data[i].id +'" ><div class="left tag blue">'+ data[i].magnitude +'</div><strong>'+ data[i].title +'</strong></a> <small>'+ new Date(data[i].pubDate  * 1000)+'</small></li> ');
				     lista +='<li class="arrow"><a href="#detalle_terremoto" data-router="section" data-id="'+ data[i].id +'" ><div class="left tag blue">'+ data[i].magnitude +'</div><strong>'+ data[i].title +'</strong></a> <small>'+ new Date(data[i].pubDate  * 1000)+'</small></li> ';
				        
				    }

				   $$('#buscador ul').html(lista); 
	 	   });

	});
  


/*
Lungo.dom('#buscador').on("keyup", function(event){
	
	var texto = $$('#buscador input').val();
	var sql = 'SELECT title FROM terremotos  WHERE title LIKE "%M%" ';
	
	  console.log(sql);

	   Lungo.Data.Sql.select('terremotos',{title:'ML 3.0  ANTOFAGASTA, CHILE'}, function(data){
  			console.log(data);
 	   });

	});
*/