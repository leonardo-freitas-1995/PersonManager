import Resource from './Resource'

const _resource = new Resource("/api/person/");

class Person {


    static getEveryone(){
        return new Promise((resolve, reject) => {
            _resource.get()
            .then(data => {
                resolve(data.people);
            })
            .catch(error => {
                reject("error");
            })
        });
    }

    static getSomeone(id){
        return new Promise((resolve, reject) => {
            _resource.get({id})
            .then(data => {
                resolve(data.person);
            })
            .catch(error => {
                console.log(error);
                reject("error");
            })
        });
    }

    static createNewPerson(data){
        return new Promise((resolve, reject) => {
            _resource.post(data)
                .then(data => {
                    resolve(data.newPerson);
                })
                .catch(error => {
                    reject("error");
                })
        });
    }

    static editPerson(id, data){
        return new Promise((resolve, reject) => {
            _resource.put(data, {id})
                .then(data => {
                    resolve();
                })
                .catch(error => {
                    reject("error");
                })
        });
    }

    static deletePerson(id){
        return new Promise((resolve, reject) => {
            _resource.remove({}, {id})
                .then(data => {
                    resolve();
                })
                .catch(error => {
                    reject("error");
                })
        });
    }

}

export default Person;