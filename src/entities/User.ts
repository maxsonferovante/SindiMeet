import { v4 as uuidv4 } from "uuid";

export interface User {
    id: string;
    fullName: string;
    company: string;
    email: string;
    password: string;
    nickname: string;
}
export interface UserDelete {
    id: string;
}

export interface UserUpdate {
    id: string;
    fullName: string;
    company: string;
    email: string;
    nickname: string;
}
export interface UserUpdatePassword {
    id: string;
    password: string;
}

export class UserModel implements User {
    public readonly id!: string;
    public fullName!: string;
    public company!: string;
    public email!: string;
    public password!: string;
    public nickname!: string;

    constructor(props: Omit<User, "id">, id?: string) { // Omit<User, "id"> = pega todos os campos de User menos o id
        Object.assign(this, props);
        if (this.id == null) {
            this.id = id || uuidv4();
        }
    }
}