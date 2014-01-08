/*jslint node: true */
'use strict';
var express = require('express'),
    entity = require('./routes/entity'),
    app = express(),

    root = "/api"

app.use(express.bodyParser());

//app.get('/api/awesomeThings', routes.awesomeThings);
//
// Routes!
//
app.all (root + '/:entity/:id', entity.all);
app.get (root + '/:entity/meta', entity.meta);
app.get (root + '/:entity/all', entity.listAll);
app.get (root + '/:entity/:id', entity.list);
app.put (root + '/:entity/:id', entity.edit);
app.post(root + '/:entity', entity.add);
app.delete(root + '/:entity/:id', entity.remove);

//
//app.use(function (req, res) {
//    res.json({'ok': false, 'status': '404'});
//});

module.exports = app;