(() => {

    
    
    const add = (a: number, b: number): number =>   a + b;
    
    const name = () => 'Hello World';

    const getSalary = (): Promise<string> => {


        return new Promise((resolve, reject) => {
            resolve('Hi');
        });
    }

    getSalary().then(a => console.log(a));

})();