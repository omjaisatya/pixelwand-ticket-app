import { StatusBar } from "expo-status-bar";
import { BookingProvider } from "./src/context/BookingContext";
import { AppNavigator } from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <BookingProvider>
      <AppNavigator />
      <StatusBar style="auto" />
    </BookingProvider>
  );
}
