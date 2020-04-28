export class planet {
    width: number;
    color: string;

    constructor(width, color){
        this.width = width;
        this.color = color;
    }
}

export let krypton = new planet(5, 'blue');
export let omicronPersei8 = new planet(6, 'red');
export let nemesis = new planet(8, 'purple');

