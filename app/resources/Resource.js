import request from 'superagent';

class Resource {
    constructor(apiURL){
        this.apiURL = apiURL;
    }

    get(params){

        return new Promise((resolve, reject) => {
            request
                .get(this.apiURL + Resource._createParamURI(params))
                .end((err, data) => {
                    if (err){
                        reject(err);
                    }
                    else{
                        resolve(data.body);
                    }
                });
        });
    }

    post(body, params){
        return new Promise((resolve, reject) => {
            request
                .post(this.apiURL + Resource._createParamURI(params))
                .send(body)
                .end((err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data.body);
                    }
                });
        });
    }

    put(body, params){
        return new Promise((resolve, reject) => {
            request
                .put(this.apiURL + Resource._createParamURI(params))
                .send(body)
                .end((err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data.body);
                    }
                });
        });
    }

    remove(body, params){
        return new Promise((resolve, reject) => {
            request
                .delete(this.apiURL + Resource._createParamURI(params))
                .send(body)
                .end((err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data.body);
                    }
                });
        });
    }

    static _createParamURI(params){
        let paramURI = "";
        if (params){
            for (let attr in params){
                if (params.hasOwnProperty(attr) && params[attr]){
                    paramURI += `${params[attr]}/`;
                }
            }
        }

        return paramURI;
    }
}

export default Resource;