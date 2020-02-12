import MongoClient from 'mongodb';
const url = 'mongodb://localhost:27017';
const dbName = 'bibtest';
//const async = require('async');

class bibapiDatabase {
  constructor() {

  }
  async namePredictDB(nameFragment) {
    let welp = new Promise(function(resolve, reject){
      MongoClient.connect(url, function (err, client){
       //console.log("Connected correctly to server");
         if(err){ console.log(err)};
         const db = client.db(dbName);
         const names = db.collection('names');
         let nameConcat = "\"" + nameFragment + "\"";
         names.find({ $text: { $search: nameConcat, $caseSensitive: false }}).limit(12).toArray().then( data => {
           var tmp = data.map(x => { return x.primaryName});
           client.close();
           resolve(tmp);
           //console.log("DB CALL " + data.map(x => { return x.primaryName}));
         });
      })
    })
    return Promise.resolve(welp);


  }

}

export default new bibapiDatabase();
