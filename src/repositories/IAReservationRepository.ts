import { Reservation, ReservationDelete, ReservationExists, ReservationUpdate, ReservationUpdateStatus, reservationExists } from "../entities/Reservation";
import { ICreateReservationResponseDTO } from "../useCases/CreateReservation/ICreateReservationRequestDTO";

export interface IAReservationRepository {

    save(reservation: Reservation): Promise<ICreateReservationResponseDTO>;
    update(reservation: ReservationUpdate): Promise<void>;
    delete(data: ReservationDelete): Promise<void>;

    findById(id: string): Promise<Reservation>;
    findByDate(date: Date): Promise<Reservation[]>;

    modificateStatus(data: ReservationUpdateStatus): Promise<void>;
    existedReservation(data: ReservationExists): Promise<boolean>;

    listAll(): Promise<Reservation[]>;

}