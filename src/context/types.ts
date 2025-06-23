import { Booking } from "../types";

export interface BookingState {
  bookings: Booking[];
}

export type BookingAction =
  | { type: "ADD_BOOKING"; payload: Booking }
  | { type: "REMOVE_BOOKING"; payload: string }
  | { type: "LOAD_BOOKINGS"; payload: Booking[] };
