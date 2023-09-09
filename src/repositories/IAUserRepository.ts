import { User, UserDelete, UserUpdate, UserUpdatePassword } from "../entities/User";

export interface IAUserRepository {
    findById(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findByNickname(nickname: string): Promise<User>;

    existedEmail(email: string): Promise<boolean>;
    existedNickname(nickname: string): Promise<boolean>;

    save(user: User): Promise<void>;
    update(user: UserUpdate): Promise<void>;
    delete(user: UserDelete): Promise<void>;
    updatePassword(user: UserUpdatePassword): Promise<void>;
}