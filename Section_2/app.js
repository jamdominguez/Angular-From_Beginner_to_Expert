"use strict";
(function () {
    var avengers = ['Thor', 'Ironman', 'Spiderman'];
    console.log(avengers[0]); // Thor
    console.log(avengers[1]); // Ironman
    console.log(avengers[2]); // Spiderman
    var lighting = avengers[0], technology = avengers[1], net = avengers[2]; // Here the order matters
    console.log(lighting); // Thor
    console.log(technology); // Ironman
    console.log(net); // Spiderman
    var human = avengers[1];
    console.log(human); // Ironman
    var extractArray = function (_a) {
        var insect = _a[2];
        console.log(insect); // Spiderman
    };
    extractArray(avengers);
})();
