
	Lungo.dom('#buscador').on("keyup", function(event){
	
		var texto = $$('#buscador input').val();
		var sql = 'SELECT title FROM terremotos  WHERE title LIKE \"%' + texto + '%\"';
		
		  console.log(sql);

		   Lungo.Data.Sql.execute(sql, function(data){
	  			console.log("ASDFÑASJFDLSADJ");
	  			console.log(data);
	 	   });

	 	   //  Lungo.Data.Sql.select('terremotos',{title:'ML 3.0  ANTOFAGASTA, CHILE'}, function(data){
	  			// console.log(data);
	 	   // });

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