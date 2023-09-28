export interface ICreateReservationRequestDTO {
    userId: string;
    date: Date;
    time: string;
}

export interface ICreateReservationResponseDTO {
    id?: string;
    userId: string;
    date: Date;
    time: string;
    status: string;
}