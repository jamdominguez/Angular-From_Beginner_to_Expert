(() => {

    interface XMen {
        name: string;
        age: number;
        power: string;
        rank: number;
        location?: string;
    }

    const sentToMission = (xmen: XMen) => {
        console.log(`${xmen.name} in action!`);
    }

    const wolverine: XMen = {
        name: 'Logan',
        age: 60
    }

    sentToMission(wolverine);


})();