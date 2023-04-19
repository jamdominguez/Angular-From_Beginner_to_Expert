"use strict";
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
        constructor(name, team, realName, canFight, victories = 0) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.canFight = canFight;
            this.victories = victories;
        }
    }
    const antMan = new Avenger('AntMan', 'Capi');
    console.log(antMan);
})();
