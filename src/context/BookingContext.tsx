import React, { createContext, useContext, useReducer, useEffect } from "react";
import { BookingState, BookingAction } from "./types";
import { Booking } from "../types";
import { useBookingsStorage } from "../hooks/useBookingsStorage";

const BookingContext = createContext<{
  state: BookingState;
  dispatch: React.Dispatch<BookingAction>;
} | null>(null);

const bookingReducer = (
  state: BookingState,
  action: BookingAction
): BookingState => {
  switch (action.type) {
    case "ADD_BOOKING":
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case "REMOVE_BOOKING":
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.id !== action.payload
        ),
      };
    case "LOAD_BOOKINGS":
      return {
        ...state,
        bookings: action.payload,
      };
    default:
      return state;
  }
};

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(bookingReducer, { bookings: [] });
  const { loadBookings, saveBookings } = useBookingsStorage();

  useEffect(() => {
    loadBookings().then((bookings) => {
      dispatch({ type: "LOAD_BOOKINGS", payload: bookings });
    });
  }, []);

  useEffect(() => {
    saveBookings(state.bookings);
  }, [state.bookings]);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookingContext must be used within a BookingProvider");
  }
  return context;
};
