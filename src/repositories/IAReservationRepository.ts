import { Reservation, ReservationDelete, ReservationExists, ReservationUpdate, ReservationUpdateStatus } from "../entities/Reservation";
import { ICreateReservationResponseDTO } from "../useCases/CreateReservation/ICreateReservationRequestDTO";

import { Status } from '../entities/Reservation'
export interface IAReservationRepository {

    save(reservation: Reservation): Promise<ICreateReservationResponseDTO>;
    update(reservation: ReservationUpdate): Promise<void>;
    delete(data: ReservationDelete): Promise<void>;

    findById(id: string): Promise<Reservation>;
    findByDate(date: Date): Promise<Reservation[]>;

    modificateStatus(data: ReservationUpdateStatus): Promise<void>;
    existedReservation(data: ReservationExists): Promise<boolean>;

    fetchAllReservations(status: string): Promise<Reservation[]>;

    listAll(): Promise<Reservation[]>;
    fetchAllReservationsByUser(user_id: string): Promise<Reservation[]>;

    updateReservationStatus(data: ReservationUpdateStatus): Promise<void>;

    listReservationsForTodayOrderedByCheckin(): Promise<Reservation[]>;

}

