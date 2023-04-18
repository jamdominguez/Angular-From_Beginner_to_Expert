( () => {
    
    const avengers = ['Thor', 'Ironman', 'Spiderman'];

    console.log(avengers[0]); // Thor
    console.log(avengers[1]); // Ironman
    console.log(avengers[2]); // Spiderman

    const [lighting, technology, net] = avengers; // Here the order matters
    console.log(lighting); // Thor
    console.log(technology); // Ironman
    console.log(net); // Spiderman

    const [, human, ] = avengers;
    console.log(human); // Ironman

    const extractArray = ([,,insect]: string[]) => {
        console.log(insect); // Spiderman
    }

    extractArray(avengers);


})();