export class User {
    user_id !: number;
    firstName!: string;
    lastName!: string;
    emailId!: string;
    password!: string;
    repeatPassword!: string;
    phoneNum!: string;
    profileImage!: File|string;
    role!: string;
    emailError!: boolean;
    passwordError!: boolean;
}