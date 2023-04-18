(function () {

    function activate(who: string, time?: string, item: string = 'batsign') {
        if (time) {
            console.log(`${who} activated the ${item} ${time}`);
        } else {
            console.log(`${who} activated the ${item}`);
        }
    }

    activate('Gordon'); // Gordon activated the batsign
    activate('Gordon', 'in the night'); // Gordon activated the batsign in the night
    activate('Gordon', 'in the night', 'bomb'); // Gordon activated the bomb in the night

})();