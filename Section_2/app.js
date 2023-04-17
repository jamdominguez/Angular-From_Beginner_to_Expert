"use strict";
(function () {
    var NAME = 'John';
    var SURNAME = 'Snow';
    var AGE = 33;
    var DESCRIPTION = 'Guardian of The Wall with a total deffected walkers:';
    var WALKERS_DEFEATED = 12;
    function getPlusDefeated() {
        return 20;
    }
    // John Snow (Age: 33)
    // Guardian of The Wall with a total deffected walkers: 32
    var TEMPLATE = "".concat(NAME, " ").concat(SURNAME, " (Age: ").concat(AGE, ") \n").concat(DESCRIPTION, " ").concat(WALKERS_DEFEATED + getPlusDefeated());
    console.log(TEMPLATE);
})();
