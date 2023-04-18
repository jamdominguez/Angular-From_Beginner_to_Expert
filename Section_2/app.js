"use strict";
(() => {
    console.log('Init');
    // The promises can not be compiler to ES5 in JS, it is necessary change target version to ES6
    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Timeout resolve');
        }, 2000);
        setTimeout(() => {
            reject('Timeout reject');
        }, 1000);
    });
    prom1
        .then(message => console.log(message))
        .catch(error => console.warn(error));
    console.log('End');
})();
