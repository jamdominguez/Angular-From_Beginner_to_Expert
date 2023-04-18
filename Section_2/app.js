"use strict";
(function () {
    function activate(who, time, item) {
        if (item === void 0) { item = 'batsign'; }
        if (time) {
            console.log("".concat(who, " activated the ").concat(item, " ").concat(time));
        }
        else {
            console.log("".concat(who, " activated the ").concat(item));
        }
    }
    activate('Gordon'); // Gordon activated the batsign
    activate('Gordon', 'in the night'); // Gordon activated the batsign in the night
    activate('Gordon', 'in the night', 'bomb'); // Gordon activated the bomb in the night
})();
