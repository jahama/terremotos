var config = {
    name: 'terremotos_bd',         //Name of the database
    version: '1.0',           //Version of the database
    size: 65536,              //Size of the database
    schema: [                 //Database schema
        {
            name: 'terremotos',     //Table name
            drop: false,       //Drop existing content on init
            fields: {         //Table fields
              id: 'INTEGER PRIMARY KEY',
              title: 'TEXT',
              link: 'TEXT',
              latitud: 'REAL',
              longitud : 'REAL',
              magnitude: 'REAL',
              guid : 'TEXT',
              depth : 'INTEGER',
              description: 'TEXT',
              pubDate: 'DATETIME'

            }
        }
        
    ]
};
Lungo.Data.Sql.init(config);


var terremoto = [
        {
              id: 555 ,
              title: 'titulo',
              link: 'enlace',
              latitud: 111,
              longitud : 222,
              magnitude: 'magnitud',
              guid : 'masInfo',
              depth : 'profundidad',
              description: '<table><tr><td><table cellpadding=\""0\"" cellspacing=\""0\"" border=\""0\"" style=\""margin-top:5px; font-size:11px;\"">',
              pubDate: 'fecha_ts'
          }
      ];

     // Lungo.Data.Sql.insert('terremotos', terremoto);




