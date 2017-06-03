export class RegisterForm {

    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _password: string;


    constructor(firstName: string, lastName: string, email: string, password: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._password = password;
    }


    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }


    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }


    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }


    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }

}
