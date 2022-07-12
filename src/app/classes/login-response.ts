export class LoginResponse{
    user_id !: number;
    firstName!: string;
    lastName!: string;
    emailId!: string;
    password!: string;
    phoneNum!: string;
    profileImage!: string;
    role!: string;
    emailError!: boolean;
    passwordError!: boolean;
    myCourses!: number[]
}