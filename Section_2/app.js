"use strict";
(function () {
    function traditionalFunction(a) {
        return a.toUpperCase();
    }
    var constFunction = function (a) {
        return a.toUpperCase();
    };
    var arrowFunction = function (a) { return a.toUpperCase(); };
    var add = function (a, b) {
        return a + b;
    };
    var addArrow = function (a, b) { return a + b; };
    console.log(traditionalFunction('traditional function')); // TRADITIONAL FUNCTION
    console.log(constFunction('const function')); // CONST FUNCTION
    console.log(arrowFunction('arrow function')); // ARROW FUNCTION
    console.log(add(2, 4)); // 6
    console.log(addArrow(10, 5)); // 15
    var hulk = {
        name: 'Hulk',
        smash: function () {
            setTimeout(function () {
                console.log("".concat(this.name, " smash!!!")); //  smash!!!
            }, 1000);
        },
        smashArrow: function () {
            var _this = this;
            setTimeout(function () {
                console.log("".concat(_this.name, " smash!!!")); // Hulk smash!!!
            }, 1000);
        }
    };
    hulk.smash();
    hulk.smashArrow();
})();
