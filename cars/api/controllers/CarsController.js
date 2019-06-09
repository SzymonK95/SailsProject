var CarsController = {

    index: function (req, res) {
        Car.find(function(err, rows) {
            if(err) return res.send(err, 500);

            res.view({
                model: rows
            });
        });
    },

    new: function(req, res) {
        res.view();
    },

    create: function(req, res) {
        var params = _.extend(req.query || {}, req.params || {}, req.body || {});

        Car.create(params, function rowCreated(err, createdRow) {
            if(err) return res.send(err, 500);

            res.redirect('/cars');
        });
    },

    show: function(req, res) {
        var id = req.param('id');
        if(!id) return res.send("No id specified!", 500);

        Car.find(id, function rowFound(err, rows) {
            if(err) return res.send(err, 500);
            if(!rows) return res.send("User " + id + "not found!", 404);

            res.view({
                row: rows[0]
            })
        });
    },

    edit: function(req, res) {
        var id = req.param('id');

        if(!id) return res.send("No id specified", 500);

        Car.find(id, function rowFound(err, rows) {
            if(err) return res.send(err, 500);
            if(!rows) return res.send("User " + id + "not found!", 404);

            res.view({
                row: rows[0]
            })
        });
    },

    update: function(req, res) {
        var params = _.extend(req.query || {}, req.params || {}, req.body || {});
        var id = params.id;

        if(!id) return res.send("No id specified!", 500);

        Car.update(id, params, function rowUpdated(err, updatedRow) {
            res.redirect('/cars');
        });
    },

    destroy: function(req, res) {
        var id = req.param('id');
        if(!id) return res.send("No id specified", 500);

        Car.find(id, function foundRow(err, row) {
            if(err) return res.send(err, 500);
            if(!row) return res.send("No row with that id exists!", 404);

            Car.destroy(id, function rowDestroyed(err) {
                if(err) return res.send(err, 500);
                return res.redirect('/cars');
            });
        })
    }

    
};
module.exports = CarsController;