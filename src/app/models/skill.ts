import { Formation } from './formation'
export class Skill {
    public skillId: number
    public name: string
    public desciption: string
    public formations: Formation[]

    constructor(){
        this.skillId = null
        this.name = ''
        this.desciption = ''
    }
     
}
