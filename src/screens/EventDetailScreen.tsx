import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Booking } from "../types";
import { SeatSelector } from "../components/SeatSelector";
import { useBookingContext } from "../context/BookingContext";

type EventDetailRouteProp = RouteProp<RootStackParamList, "EventDetail">;
type EventDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  "EventDetail"
>;

interface Props {
  route: EventDetailRouteProp;
  navigation: EventDetailNavigationProp;
}

export const EventDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { event } = route.params;
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useBookingContext();

  const handleBookTickets = () => {
    const booking: Booking = {
      id: `${event.id}-${Date.now()}`,
      eventId: event.id,
      event,
      quantity,
      totalPrice: event.price * quantity,
      bookingDate: new Date().toISOString(),
    };

    dispatch({ type: "ADD_BOOKING", payload: booking });

    Alert.alert(
      "Booking Confirmed!",
      `You have successfully booked ${quantity} ticket(s) for ${event.title}`,
      [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: event.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.date}>{formatDate(event.date)}</Text>
        <Text style={styles.location}>{event.location}</Text>
        <Text style={styles.category}>Category: {event.category}</Text>
        <Text style={styles.description}>{event.description}</Text>

        <SeatSelector
          quantity={quantity}
          onIncrease={() => setQuantity((q) => Math.min(q + 1, 10))}
          onDecrease={() => setQuantity((q) => Math.max(q - 1, 1))}
        />

        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Total Price:</Text>
          <Text style={styles.totalPrice}>
            ${(event.price * quantity).toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity style={styles.bookButton} onPress={handleBookTickets}>
          <Text style={styles.bookButtonText}>Book Tickets</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 250,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  date: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: "#007AFF",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  priceLabel: {
    fontSize: 18,
    fontWeight: "600",
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
  },
  bookButton: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  bookButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
