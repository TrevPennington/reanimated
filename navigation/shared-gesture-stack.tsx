import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Home from "../screens/sharedGesture/GestureHome";
import Detail from "../screens/sharedGesture/GestureDetail";
import usePhoto from "../context/photo-context";

const Stack = createSharedElementStackNavigator();

const SharedGestureStack = () => {
  const { selectedPhoto } = usePhoto();
  const { id } = selectedPhoto || { id: "" };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen
        name="detail"
        component={Detail}
        sharedElements={() => {
          return [{ id: id, resize: "clip", animation: "move" }];
        }}
        options={{ ...options }}
      />
    </Stack.Navigator>
  );
};

export default SharedGestureStack;

const options = {
  detachPreviousScreen: false,
  headerShown: false,
  cardStyleInterpolator: ({ current: { progress } }) => ({
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.2],
        extrapolate: "clamp",
      }),
    },
  }),
  cardStyle: { backgroundColor: "transparent" },
  cardOverlayEnabled: true,
};
