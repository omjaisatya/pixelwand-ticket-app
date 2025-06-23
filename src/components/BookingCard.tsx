import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Booking } from "../types";

interface BookingCardProps {
  booking: Booking;
  onCancel: () => void;
}

export const BookingCard: React.FC<BookingCardProps> = ({
  booking,
  onCancel,
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: booking.event.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{booking.event.title}</Text>
        <Text style={styles.date}>{formatDate(booking.event.date)}</Text>
        <Text style={styles.location}>{booking.event.location}</Text>
        <View style={styles.bookingInfo}>
          <Text style={styles.quantity}>Tickets: {booking.quantity}</Text>
          <Text style={styles.totalPrice}>
            Total: ${booking.totalPrice.toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelButtonText}>Cancel Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 120,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  location: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  bookingInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  quantity: {
    fontSize: 14,
    fontWeight: "600",
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007AFF",
  },
  cancelButton: {
    backgroundColor: "#FF3B30",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
