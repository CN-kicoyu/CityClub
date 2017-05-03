'use strict';

const mashupcloudApi = {
    url: "http://v2.mashupcloud.cn/developer/auth.do",
    appkey: 'UotqFqitgOlLtisTMtMBwAfvmzPjdoTo',
    appsecret: 'orBlqdwKIZOwiTvEWmrZfpKysvDLLIwn'
}
export default function fetchToken(url) {
    return fetch('http://v2.mashupcloud.cn/developer/auth.do?appkey=UotqFqitgOlLtisTMtMBwAfvmzPjdoTo&appsecret=orBlqdwKIZOwiTvEWmrZfpKysvDLLIwn')
        
    return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            console.log('sdfdsfds')
            return responseJson.movies;
        })
        .catch((error) => {
            console.error(error);
        });
}
