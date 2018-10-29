export class User {
    
    public id: number
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public cin: number;
    public enabled: boolean;
    public role: string; 

  constructor() {
  //this.id = 1;
  this.username = ''
  this.password = ''
  this.firstName = ''
  this.lastName = ''
  this.email = ''
  this.cin = null
  this.enabled = true
  this.role = ''
  //this.role = ['learner','admin','monitor']
}    
}
