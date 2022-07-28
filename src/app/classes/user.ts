export class User {
    userId !: number;
    firstName!: string;
    lastName!: string;
    emailId!: string;
    password!: string;
    repeatPassword!: string;
    phoneNum!: string;
    profileImage!: File|string;
    role!: string;
    myCourses!: number[]
    emailError!: boolean;
    passwordError!: boolean;
    status!: boolean;
}