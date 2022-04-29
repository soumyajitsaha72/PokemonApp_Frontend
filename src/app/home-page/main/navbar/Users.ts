export class Users {
    xP: number;
    score: number;
    status: boolean;
    username: string;
    email: string;

    constructor(xP: number, score: number, status: boolean, username: string, email: string) {
        this.xP = xP;
        this.score = score;
        this.status = status;
        this.email = email;
        this.username = username;
    }

}