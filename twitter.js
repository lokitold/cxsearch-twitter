//Acá reemplazamos las claves que generamos para nuestra app en dev.twitter.com
var keys = {
    "consumer_key" : "Pnhwu4078h7aVAnlwMYfAsKjW"
  , "consumer_secret" : "Tpo0GSs2lGbfF9sN09TcF62D2DA8H5i0VdXX5Irv0FkfowKGNF"
  , "access_token_key" : "2188483430-Q09VdNg1VYaFkuZcPdnf5qNMBJpuuesysDPFIDq"
  , "access_token_secret" : "rA18RrC8ybHthZAnBs13N4mALWFwif80fn6vXvYRbK0R2"
}; 
 console.log('hola');
//referenciamos al módulo Tuiter
var tu = require('tuiter')(keys);
 
//Nos ponemos en escucha de nuestra frase
tu.filter({track: 'hola twitter stream'}, function(stream){
   
  //cuando aparezca un tweet para nosotros, se dispara el callback
  stream.on('tweet', function(data){
 
    //Alguien nos Tuiteó "hola twitter stream"!
    console.log(data);
     
    //acá vamos a responder el tweet
    //responder(data);
  });
});
