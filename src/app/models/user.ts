import { Model } from "./model.class"

export interface IUserChange {
  lastLogin: string
}

export class User extends Model {

  fullname: string;
  token: string;
  lastLogin: string;

  constructor(args:any[], loadData){
    super();
    this.setUser(args);
    if (loadData){
      this.applyChanges(loadData)
    }
  }

  setUser(args){
    [this.fullname, this.token] = args
  }

  clear(){
    this.fullname = this.token = null
  }
}
