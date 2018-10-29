import { User } from "./user";

export class Apprenant extends User{
  public id: number;
  public firstName: string;
  public lastname: string;
  public birthDate: Date;
  public entryDate: Date;
  public exitDate: Date;
  public email: string;
  //public cin: number
  public phone: number;
  public adress: string;
  public score_total: number;
  public ranking: number;
  public training_name: string
  public groupName: string



  constructor() {
    super ();
    this.firstName = '';
    this.lastname = '';
    this.birthDate = null;
    this.entryDate = null;
    this.email = '';
    this.phone = null;
    this.adress = '';
    this.score_total = null;
    this.ranking = null;
    this.exitDate = null;
    this.training_name = '';
    this.groupName = '';

  }



}
