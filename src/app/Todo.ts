export class Todo {
    sno: number;
    title: string;
    desc: string;
    active: boolean;

    constructor() {
        this.sno = 0; // Initialize 'sno' property with a default value
        this.title = '';
        this.desc = '';
        this.active = false;
    }
}
