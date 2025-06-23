export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export interface Booking {
  id: string;
  eventId: string;
  event: Event;
  quantity: number;
  totalPrice: number;
  bookingDate: string;
}

export type RootStackParamList = {
  MainTabs: undefined;
  EventDetail: { event: Event };
};

export type TabParamList = {
  Home: undefined;
  Bookings: undefined;
};
