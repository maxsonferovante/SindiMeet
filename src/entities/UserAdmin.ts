

import { v4 as uuidv4 } from 'uuid';
export interface UserAdmin {
    id: string;
    fullName: string;
    email: string;
    password: string;
}

export interface IUserAdminCreate {
    fullName: string;
    email: string;
    password: string;
}

export interface IUserAdminUpdate {
    id: string;
    fullName: string;
    email: string;
}

export interface IUserAdminUpdatePassword {
    id: string;
    password: string;
}

export class UserAdminModel implements UserAdmin {
    public readonly id!: string;
    public fullName!: string;
    public email!: string;
    public password!: string;
    constructor(props: UserAdmin) {
        Object.assign(this, props);
        if (this.id == null) {
            this.id = props.id || uuidv4();
        }
    }
}