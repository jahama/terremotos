

	var config = {
		name:'test_lungoJS_db',
		version:'1.0',
		schema: [
			{
			name:'task',drop:false, fields:{
				id:'INTEGER PRIMARY KEY',
				name: 'TEXT',
				description: 'TEXT',
				done: 'INTEGER DEFAULT 0',
				created_at:'DATETIME'

				}
			},
			{
			name:'cache',drop:true, fields:{
				id:'INTEGER PRIMARY KEY'
				}
			}
		]
	}

	Lungo.Data.Sql.init(config);

	// Crear un nuevo registro
	var insertTask = function(data){
		Lungo.Data.Sql.insert("task",{
			name:'Llamar a grupo SIE',
			description:'Que pasa con las practicas !!!!'
		});
	}

	insertTask();

	// Borrar un registro
	var deleteTask = function(){
		Lungo.Data.Sql.drop('task',{
			id:1
		})
	}

	// Actualizar
	var updateTask = function(){
		// Sin WHERE , actulaizaria todos los registros !!!!!!!!!!!!!!!!!!!
		Lungo.Data.Sql.update('task',
			{
				name: " LLAMARA A IÑAKI DE GRUPO SIE"
			});


		// con 	WHERE
		Lungo.Data.Sql.update('task',
			{

			},
			{

			});
	}


	