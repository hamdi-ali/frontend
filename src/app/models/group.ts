export class Group {
    public groupId: number
    public entryDate: Date;
    public exitDate: Date;
    public name: string

    constructor(){
        this.entryDate = null;
        this.exitDate = null;
        this.name = ''
    }
}
