const axios = require('axios')

exports.website = (url) => {
    url = urlencode(url)
    const options = {
        method: 'GET',
        url: `https://ipqualityscore.com/api/json/url/gK9daycB4hvyLu7b0iykkB1ARUasZDkm/${url}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
        }
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.error(error);
        });
}

function urlencode(str) {

    str = (str + '').toString();

    return encodeURIComponent(str)
        .replace(/!/g, '%21')
        .replace(/'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A')
        .replace(/%20/g, '+');
}