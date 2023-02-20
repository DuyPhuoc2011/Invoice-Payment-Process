import request from 'request';
// var username = "admin";
// var password = "admin"
// var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

export function getProcessDefinitions(url) {
    return new Promise((resolve, reject) => {
        request(url, { json: true }, (err, res, body) => {
            if (err)
                reject(err);
            resolve(body);
        });
    });
}

export function getProcessDefinitionTaskKey(url){
    return new Promise((resolve, reject) => {
        request(url, { json: true }, (err, res, body) => {
            if (err)
                reject(err);
            resolve(body);
        });
    });
}

export function startProcessInstance(url, params){
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: params
        }, (err, res, body) => {
            if (err)
                reject(err);
            resolve(body);
        })
    });
}

export function getTasks(url){
    return new Promise((resolve, reject) => {
        request(url, { json: true }, (err, res, body) => {
            if (err)
                reject(err);
            resolve(body);
        });
    });
}

export function getRenderedForm(url){
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: "GET",
            headers: {
                "content-type": "application/xml",
            }
        }, (err, res, body) => {
            if (err)
                reject(err);
            resolve(body);
        })
    });
}

export function getVariablesForTask(url){
    return new Promise((resolve, reject) => {
        request(url, { json: true }, (err, res, body) => {
            if (err)
                reject(err);
            resolve(body);
        });
    });
}

export function postCompleteTask(url, params){
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: params
        }, (err, res, body) => {
            if (err)
                reject(err);
            resolve(body);
        })
    });
}

