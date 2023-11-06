import { Person } from "./person.js";
export class Student extends Person {
    constructor() {
        super();
        this.name1 = "";
    }
    getName() {
        return this.name1;
    }
    setName(name1) {
        this.name1 = name1;
    }
}
