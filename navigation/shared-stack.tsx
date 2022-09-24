import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import SharedHome from "../screens/shared/SharedHome";
import SharedDetail from "../screens/shared/SharedDetail";
import usePhoto from "../context/photo-context";

const Stack = createSharedElementStackNavigator();

const SharedStack = () => {
  const { selectedPhoto } = usePhoto();
  const { id } = selectedPhoto || { id: "", url: "" };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={SharedHome} />
      <Stack.Screen
        name="detail"
        component={SharedDetail}
        sharedElements={() => {
          return [id];
        }}
      />
    </Stack.Navigator>
  );
};

export default SharedStack;
