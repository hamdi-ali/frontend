import { TrainingSkills } from './training-skills'
import { Skill } from './skill'

export class Training {
    public trainingId: number
    public name: string
    public desciption: string
    public duration: number
    public job: string
    public trainingSkills: TrainingSkills[]
    public skill: Skill[]

}
