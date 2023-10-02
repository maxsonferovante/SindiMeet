import { PrismaClient } from "@prisma/client";
import { IUserAdminUpdatePassword, UserAdmin, UserAdminModel } from "../../entities/UserAdmin";

import { IAUserAdminRepository } from "../IAUserAdminRepository"



const prisma = new PrismaClient();

export class PostgresUserAdminRepository implements IAUserAdminRepository {
    async save(user: UserAdmin): Promise<void> {
        try {

            await prisma.userAdmin.create({
                data: {
                    id: user.id,
                    fullName: user.fullName,
                    email: user.email,
                    password: user.password
                }
            })
        }
        catch (error) {
            throw new Error(error);
        }
    }
    update(user: UserAdminModel): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<UserAdmin> {
        try {
            const user = prisma.userAdmin.findUniqueOrThrow({
                where: {
                    id: id
                }
            });
            if (user != null) {
                return new UserAdminModel(
                    user
                );
            }
            throw new Error("User not found.");

        }
        catch (error) {
            throw new Error(error);
        }
    }
    findByEmail(email: string): Promise<UserAdmin> {
        try {
            const user = prisma.userAdmin.findUniqueOrThrow({
                where: {
                    email: email
                }
            });
            if (user != null) {
                return new UserAdminModel(
                    user
                );
            }
            throw new Error("User not found.");

        }
        catch (error) {
            throw new Error(error);
        }
    }
    updatePassword(data: IUserAdminUpdatePassword): Promise<void> {
        throw new Error("Method not implemented.");
    }


}