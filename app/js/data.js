var CONFIG = {
    name: 'terremotos_db',         //Name of the database
    version: '1.0',           //Version of the database
    size: 65536,              //Size of the database
    schema: [                 //Database schema
        {
            name: 'terremotos',     //Table name
            drop: true,       //Drop existing content on init
            fields: {         //Table fields
              id: 'INTEGER PRIMARY KEY',
              title: 'TEXT',
              link: 'STRING',
              latitud: 'REAL',
              longitud : 'REAL',
              guid : 'TEXT',
              depth : 'INTEGER',
              description: 'TEXT',
              pubDate: 'DATETME'

            }
        }
        
    ]
};
Lungo.Data.Sql.init(CONFIG);

// Insertar registros
var accounts = [
    {
              id: 2222 ,
              title: 'titulo',
              link: 'http://www.emsc-csem.org/Earthquake/earthquake.php?id=320316',
              latitud: 22.22,
              longitud : 33.33,
              guid : 'http://www.emsc-csem.org/Earthquake/earthquake.php?id=320316',
              depth : '11',
              description: '<table><tr><td><table cellpadding="0" cellspacing="0" border="0" style="margin-top:5px; font-size:11px;"><tr><td style="padding-right:4px">Magnitude</td><td class="point2">  ML 2.0</td></tr><tr><td style="padding-right:4px">Region</td><td class="point2">  SICILY, ITALY</td></tr><tr><td style="padding-right:4px">Date time</td><td class="point2">  2013-06-04   20:03:15.0 UTC</td></tr><tr><td style="padding-right:4px">Location</td><td class="point2">  38.44 N ; 15.34 E</td></tr><tr><td style="padding-right:4px">Depth</td><td class="point2">  114 km</td></tr></table></td></tr></table>',
              pubDate: 'Tue, 04 Jun 2013 20:12:00 +0000'
    }
];

//Lungo.Data.Sql.insert('terremotos', accounts);

// Select
var showInfo = function(data){

    for(var i = 0, len = data.length; i < len; i++){
        var text = "The account " + data[i].account;
        text += " name is " + data[i].name;
        console.log(text);
      }

};


//Lungo.Data.Sql.select('twitter', {account: 'lungojs'}, showInfo);


