import { v4 as uuidv4 } from "uuid";


export enum Status {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    CANCELED = "CANCELED",
    COMPLETED = "COMPLETED"
}
export interface Reservation {
    id: string;
    userId: string;
    date: Date;
    time: string;
    status: string;
}

export interface ReservationDelete {
    id: string;
}

export interface ReservationUpdate {
    id: string;
    date: Date;
    time: string;
    status: Status;
}

export interface ReservationUpdateStatus {
    id: string;
    status: string;
}


export interface ReservationExists {
    userId: string;
    date: Date;
    time: string;
}

export class ReservationModel implements Reservation {
    public readonly id!: string;
    public userId!: string;
    public date!: Date;
    public time!: string;
    public status!: Status;

    constructor(props: Omit<Reservation, "id">, id?: string) {

        Object.assign(this, props);
        if (this.id == null) {
            this.id = id || uuidv4();
        }

    }
}