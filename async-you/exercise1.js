const http = require('http');
const async = require('async');
const fs = require('fs');

const path = process.argv[2];

async.waterfall([
    function(done){
        fs.readFile(path, function(err, data){
            if (err) return done(err);
            done(null, data)
        });
    },

    function(data, done){
        var body = '';
        http.get(data.toString().trimRight(), function(res){
            res.on('data', function(chunk){
                body += chunk.toString();
            });

            res.on('end', function(chunk){
                done(null, body);
            });
        }).on('error', function(e){
            done(e);
        });
    }
], function done(err, result){
    if (err) return console.error(err);
    console.log(result);
});