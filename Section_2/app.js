"use strict";
(() => {
    const add = (a, b) => a + b;
    const name = () => 'Hello World';
    const getSalary = () => {
        return new Promise((resolve, reject) => {
            resolve('Hi');
        });
    };
    getSalary().then(a => console.log(a));
})();
