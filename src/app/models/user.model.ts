export class User {
  constructor(
    public email: string,
    public token: string,
    private localId: string,
    private expirationDate: Date
  ) {}
}


//  constructor(
//   private email: string,
//   private token:string,
//   private localId:string,
//   private expirationDate:Date){}
// }