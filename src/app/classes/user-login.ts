export class UserLogin {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    console.log('LoginCred Created...');
    this.email = email;
    this.password = password;
  }
}
