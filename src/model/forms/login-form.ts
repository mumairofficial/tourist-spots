export class LoginForm {
    private _email: string;
    private _password: string;

    constructor(email: string, password: string) {
        this._email = email;
        this._password = password;
    }

    set email(email: string) {
        this._email = email;
    }

    get email(): string {
        return this._email;
    }

    set password(password: string) {
        this._password = password;
    }

    get password(): string {
        return this._password;
    }

}
