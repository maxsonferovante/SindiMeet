import {
    UserAdmin,
    UserAdminModel,
    IUserAdminUpdatePassword
} from '../entities/UserAdmin';

export interface IAUserAdminRepository {
    save(user: UserAdmin): Promise<void>;
    update(user: UserAdminModel): Promise<void>;
    delete(id: string): Promise<void>;

    findById(id: string): Promise<UserAdminModel>;

    findByEmail(email: string): Promise<UserAdminModel>;

    updatePassword(data: IUserAdminUpdatePassword): Promise<void>;

}