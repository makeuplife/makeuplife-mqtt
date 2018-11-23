var mosca = require('mosca');
var config = require('../config');

// var ascoltatore = {
//     //using ascoltatore
//     type: 'mongo',
//     url: config.db.mongodb_url_dev + '/' + config.db.db_name,
//     pubsubCollection: 'mqtt',
//     mongo: {}
// };

var settings = {
    port: 1883,
    // backend: ascoltatore
};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

server.on('published', function(packet, client) {
    // console.log('client=>', client)
    // console.log('packet=>', packet)
    console.log('Published', packet.payload);

});

server.on('ready', setup);

function setup() {
    console.log('Mosca server is up and running');
}
