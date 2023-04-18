"use strict";
(() => {
    const getMoney = (amount) => {
        let currentAmount = 1300;
        return new Promise((resolve, reject) => {
            if (amount > currentAmount) {
                reject('Not enough money');
            }
            else {
                currentAmount -= amount;
                resolve(currentAmount);
            }
        });
    };
    getMoney(1500)
        .then(currentAmount => console.log(`Current amount: ${currentAmount}`))
        //.catch(error => console.warn(error)); // works
        .catch(console.warn); // works too
})();
