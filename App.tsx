import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation/app-navigator";

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaProvider>
  );
}
