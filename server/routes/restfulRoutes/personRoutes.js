module.exports = function (app) {
    
    let personController = app.controllers.personController;

    app.route("/api/person")
        .get(personController.getEveryone)
        .post(personController.createNewPerson);

    app.route("/api/person/:id")
        .get(personController.getSomeone);

};
