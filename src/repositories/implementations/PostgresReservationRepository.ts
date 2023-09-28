import { IAReservationRepository } from "../IAReservationRepository";
import { AppError } from "../../errors/AppError";
import { Reservation, ReservationUpdate, ReservationDelete, ReservationUpdateStatus, ReservationExists, ReservationModel } from "../../entities/Reservation";


import { PrismaClient } from "@prisma/client";
import { ICreateReservationResponseDTO } from "../../useCases/CreateReservation/ICreateReservationRequestDTO";

const prisma = new PrismaClient();

export class PostgresReservationRepository implements IAReservationRepository {
    async save(reservation: Reservation): Promise<ICreateReservationResponseDTO> {
        try {
            const reservationCreate = await prisma.reservation.create({
                data: {
                    id: reservation.id,
                    userId: reservation.userId,
                    date: reservation.date,
                    time: reservation.time,
                    status: reservation.status
                }
            });
            return {
                id: reservationCreate.id,
                userId: reservationCreate.userId,
                date: reservationCreate.date,
                time: reservationCreate.time,
                status: reservationCreate.status
            };
        }
        catch (err) {
            throw new AppError(err.message || "Unexpected error.", 400);
        }
    }
    update(reservation: ReservationUpdate): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(data: ReservationDelete): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async findById(id: string): Promise<Reservation> {
        try {
            const reservation = await prisma.reservation.findFirst({
                where: {
                    id: id
                }
            });
            if (reservation != null) {

                return new ReservationModel(reservation);
            }
            throw new AppError("Reservation not found.", 400);
        }
        catch (err) {
            throw new AppError(err.message || "Unexpected error.", 400);
        }
    }
    findByDate(date: Date): Promise<Reservation[]> {
        throw new Error("Method not implemented.");
    }
    modificateStatus(data: ReservationUpdateStatus): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async existedReservation(data: ReservationExists): Promise<boolean> {
        try {
            const reservation = await prisma.reservation.findFirst({
                where: {
                    date: data.date,
                    time: data.time,
                    userId: data.userId
                }
            });
            return reservation ? true : false;
        }
        catch (err) {
            throw new AppError("Faliad in create Reservation", 400);
        }
    }

    listAll(): Promise<Reservation[]> {
        throw new Error("Method not implemented.");
    }


}