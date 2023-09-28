import { IAUserRepository } from "../IAUserRepository";
import { User, UserDelete, UserModel, UserUpdate, UserUpdatePassword } from "../../entities/User";

import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/AppError";


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
            throw new AppError("Failed to check email.", 400);
        }
    }


    async findById(id: string): Promise<User> {
        try {
            const user = await prisma.user.findUniqueOrThrow({
                where: {
                    id: id,
                }
            });

            if (user != null) {
                return new UserModel(user);
            }
            throw new AppError("User not found.", 400);
        }
        catch (err) {
            throw new AppError("User not found.", 400);
        }
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
            throw new AppError("User not found.", 400);
        }
        catch (err) {
            throw new AppError("User not found.", 400);
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

