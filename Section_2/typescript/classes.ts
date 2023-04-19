(() => {

    // class Avenger {
    //     name: string = 'No name';
    //     team: string;
    //     realName: string;
    //     canFight; boolean;
    //     victories: number;

    //     constructor(nam: string, team: string, realNam: string) {
    //         this.name = nam;
    //         this.team = team;
    //     }
    // }
    // const antMan = new Avenger('AntMan', 'Capi');
    // console.log(antMan);

    class Avenger {

        constructor(
            public name: string,
            public team: string,
            public realName?: string,
            public canFight?: boolean,
            public victories: number = 0) {}
    }
    const antMan = new Avenger('AntMan', 'Capi');
    console.log(antMan);


})();