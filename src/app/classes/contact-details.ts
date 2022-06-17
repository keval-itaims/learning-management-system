export class ContactDetails{
    phone: string;
    email: string;
    address: string;
    constructor(phone: string, email: string, address:string){
        this.phone = phone;
        this.email = email;
        this.address = address;
    }
}