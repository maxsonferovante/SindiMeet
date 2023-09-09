import { IAUserRepository } from "../IAUserRepository";
import { User, UserDelete, UserModel, UserUpdate, UserUpdatePassword } from "../../entities/User";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PostgresUserRepository implements IAUserRepository {
    async existedEmail(email: string): Promise<boolean> {
        try {
            const user = await prisma.user.findFirst({
                where: {
                    email: email,
                }
            });
            if (user != null) {
                return true;
            }
            return false;
        }
        catch (err) {
            throw new Error("Failed to check email.");
        }
    }
    async existedNickname(nickname: string): Promise<boolean> {
        try {
            const user = await prisma.user.findFirst({
                where: {
                    nickname: nickname,
                }
            });
            if (user != null) {
                return true;
            }
            return false;
        }
        catch (err) {
            throw new Error("Failed to check nickname.");
        }
    }
    async findByNickname(nickname: string): Promise<User> {
        try {
            const user = await prisma.user.findFirst({
                where: {
                    nickname: nickname,
                }
            });
            if (user != null) {
                return new UserModel(user);
            }
            throw new Error("User not found.");

        }
        catch (err) {
            throw new Error("User not found.");
        }
    }
    findById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async findByEmail(email: string): Promise<User> {
        try {
            const user = await prisma.user.findUniqueOrThrow({
                where: {
                    email: email,
                }
            });
            if (user != null) {
                return new UserModel(user);
            }
            throw new Error("User not found.");
        }
        catch (err) {
            throw new Error("User not found.");
        }

    }
    async save(user: User): Promise<void> {

        await prisma.user.create({
            data: {
                id: user.id,
                fullName: user.fullName,
                company: user.company,
                email: user.email,
                password: user.password,
                nickname: user.nickname,
            }
        });
    }

    update(user: UserUpdate): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(user: UserDelete): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updatePassword(user: UserUpdatePassword): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

