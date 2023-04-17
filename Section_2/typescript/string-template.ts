(function(){

const NAME = 'John';
const SURNAME = 'Snow';
const AGE = 33;
const DESCRIPTION = 'Guardian of The Wall with a total deffected walkers:';
const WALKERS_DEFEATED = 12;

function getPlusDefeated() {
    return 20;
}

// John Snow (Age: 33)
// Guardian of The Wall with a total deffected walkers: 32
const TEMPLATE = `${NAME} ${SURNAME} (Age: ${AGE}) \n${DESCRIPTION} ${WALKERS_DEFEATED + getPlusDefeated()}`;
console.log(TEMPLATE);

})();