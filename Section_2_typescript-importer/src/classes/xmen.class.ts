function printConsole(constructorClass: Function){
    console.log(constructorClass);
}

@printConsole
export class Xmen {
    constructor(
        public name: string,
        public key: string
    ) { }

    print() {
        console.log(`${this.name} - ${this.key}`);
    }
}