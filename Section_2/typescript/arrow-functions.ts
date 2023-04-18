(function () {

    function traditionalFunction(a: string) {
        return a.toUpperCase();
    }

    const constFunction = function (a: string) {
        return a.toUpperCase();
    }

    const arrowFunction = (a: string) => a.toUpperCase();

    const add = function (a: number, b: number) {
        return a + b;
    }

    const addArrow = (a: number, b: number) => a + b;

    console.log(traditionalFunction('traditional function')); // TRADITIONAL FUNCTION
    console.log(constFunction('const function')); // CONST FUNCTION
    console.log(arrowFunction('arrow function')); // ARROW FUNCTION
    console.log(add(2, 4)); // 6
    console.log(addArrow(10, 5)); // 15

    const hulk = {
        name: 'Hulk',
        smash() {
            setTimeout(function() {
                console.log(`${this.name} smash!!!`); //  smash!!!
            }, 1000);
        },
        smashArrow() {
            setTimeout(() => {
                console.log(`${this.name} smash!!!`); // Hulk smash!!!
            }, 1000);
        }
    }

    hulk.smash();
    hulk.smashArrow();


})();