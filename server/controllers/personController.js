module.exports = function(app){

    let Person = app.models.person;

    let controller = {};

    controller.getEveryone = (req, res) => {
        Person.find({}).exec().then(function(people){
             res.send({people});
        },
        function(error){
            res.status(503).send(error);
        });
    };

    controller.getSomeone = (req, res) => {
        let id = req.params.id;

        Person.findOne({_id: id}).exec().then(function(person){
            if (!person){
                return res.status(404).send("notFound");
            }
            res.send({person});
        },
        function(error){
            res.status(503).send(error);
        });
    };

    controller.createNewPerson = (req, res) => {
        let personData = req.body;

        Person.create(personData, (error, newPerson) => {
            if (error){
                return res.status(503).send();
            }

            res.send({newPerson});
        });
    };

    controller.updatePerson = (req, res) => {
        let personData = req.body;
        let id = req.params.id;

        Person.updateOne({_id: id}, personData).exec((error, newPerson) => {
            if (error){
                return res.status(503).send();
            }

            res.send({newPerson});
        });
    };

    controller.deletePerson = (req, res) => {
        let id = req.params.id;

        Person.remove({_id: id}).exec((error, newPerson) => {
            if (error){
                return res.status(503).send();
            }

            res.send({newPerson});
        });
    };

    return controller;
};