import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface SeatSelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  maxQuantity?: number;
}

export const SeatSelector: React.FC<SeatSelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  maxQuantity = 10,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Number of Tickets</Text>
      <View style={styles.selector}>
        <TouchableOpacity
          style={[styles.button, quantity <= 1 && styles.buttonDisabled]}
          onPress={onDecrease}
          disabled={quantity <= 1}
        >
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity
          style={[
            styles.button,
            quantity >= maxQuantity && styles.buttonDisabled,
          ]}
          onPress={onIncrease}
          disabled={quantity >= maxQuantity}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  selector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
    minWidth: 30,
    textAlign: "center",
  },
});
