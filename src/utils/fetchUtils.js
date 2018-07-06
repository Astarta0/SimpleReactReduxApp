import { BASE_API_PATH } from "../config";
import {USERS_ERRORS} from "../constants";

export async function fetchPostRequest(apiMethod, bodyData, headers) {
    console.log(`[POST] Request ${apiMethod}; Body:`, bodyData);

    let body;
    let responseJson;

    try {
        // convert incoming object to string
        body = JSON.stringify(bodyData);
    } catch (err) {
        err.message = 'fetchPostRequest(): invalid bodyData:' + err.message;
        throw err;
    }

    console.log('Start fetch');
    let response;
    try {
        response = await fetch(BASE_API_PATH + apiMethod, {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                ...headers
            },
            body
        });
    } catch (fetchError) {
        const error = USERS_ERRORS[fetchError.message] || fetchError.message;
        throw new Error(error);
    }

    console.log('finish fetch');
    console.log('Response status:', response.status );

    //проблемы с сервером
    if (+response.status >= 300) {
        throw new Error('Oh no! Something bad happened. Please come back later when we fixed that problem. Thanks.');
    }

    try {
        // parse response, we assume that this is a json
        responseJson = await response.clone().json();

    } catch (err) {

        let text;
        try {
            text = await response.text();
        } catch (err) {
            console.error('Fetch error: ', err);
            throw err;
        }
        console.warn(`Request failed ${apiMethod}:`, text);
        throw err;
    }

    console.log(`Response ${apiMethod}; JSON:`, responseJson);

    if (responseJson.status==='err' && responseJson.message) {
        const error = USERS_ERRORS[responseJson.message] || responseJson.message;
        throw new Error(error);
    }

    if (!responseJson.data) {
        throw new Error('Oh no! Something bad happened');
    }

    return responseJson;
}


export async function fetchGetRequest(apiMethod, {headers, ...options} = {}) {
    console.log(`[GET] Request ${apiMethod}`);

    let basePath = options.baseApiPath || BASE_API_PATH;

    let responseJson;
    let response;
    console.log('Start fetch');
    try {
        response = await fetch(basePath + apiMethod, {
        method: 'get',
        headers: {
            "Accept": "application/json",
            ...headers
        }
    });
    } catch (fetchError) {
        const error = USERS_ERRORS[fetchError.message] || fetchError.message;
        throw new Error(error);
    }

    console.log('finish fetch');
    console.log('[GET] Response status:', response.status );

    //проблемы с сервером
    if (+response.status >= 500) {
        throw new Error('Oh no! Something bad happened. Please come back later when we fixed that problem. Thanks.');
    }

    try {
        // parse response, we assume that this is a json
        responseJson = await response.clone().json();
    } catch (err) {
        let text;
        try {
            text = await response.text();
        } catch (err) {
            console.error('Fetch error: ', err);
            throw err;
        }
        console.warn(`[GET] Request failed ${apiMethod}:`, text);
        throw err;
    }

    console.log(`[GET] Response ${apiMethod}; JSON:`, responseJson);

    if (responseJson.status==='err' && responseJson.message) {
        const error = USERS_ERRORS[responseJson.message] || responseJson.message;
        throw new Error(error);
    }

    if(options.baseApiPath) {
        return responseJson;
    }

    if (!responseJson.data) {
        throw new Error('Oh no! Something bad happened');
    }

    return responseJson;
}
