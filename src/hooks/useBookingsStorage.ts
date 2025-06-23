import AsyncStorage from "@react-native-async-storage/async-storage";
import { Booking } from "../types";

const BOOKINGS_STORAGE_KEY = "@pixelwand_bookings";

export const useBookingsStorage = () => {
  const saveBookings = async (bookings: Booking[]) => {
    try {
      await AsyncStorage.setItem(
        BOOKINGS_STORAGE_KEY,
        JSON.stringify(bookings)
      );
    } catch (error) {
      console.error("Error saving bookings:", error);
    }
  };

  const loadBookings = async (): Promise<Booking[]> => {
    try {
      const bookingsJson = await AsyncStorage.getItem(BOOKINGS_STORAGE_KEY);
      return bookingsJson ? JSON.parse(bookingsJson) : [];
    } catch (error) {
      console.error("Error loading bookings:", error);
      return [];
    }
  };

  const clearBookings = async () => {
    try {
      await AsyncStorage.removeItem(BOOKINGS_STORAGE_KEY);
    } catch (error) {
      console.error("Error clearing bookings:", error);
    }
  };

  return { saveBookings, loadBookings, clearBookings };
};
