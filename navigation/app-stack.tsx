import { createStackNavigator } from "@react-navigation/stack";
import { PhotoProvider } from "../context/photo-context";
import BasicStack from "./basic-stack";
import SharedStack from "./shared-stack";
import SharedGestureStack from "./shared-gesture-stack";
import Navigator from "../screens/navigator";
import Interpolation from "../screens/interpolate";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <PhotoProvider>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
        }}
      >
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="navigator" component={Navigator} />
          <Stack.Screen name="basic" component={BasicStack} />
          <Stack.Screen name="shared" component={SharedStack} />
          <Stack.Screen name="shared-gesture" component={SharedGestureStack} />
          <Stack.Screen name="interpolation" component={Interpolation} />
        </Stack.Group>
      </Stack.Navigator>
    </PhotoProvider>
  );
};

export default AppStack;
