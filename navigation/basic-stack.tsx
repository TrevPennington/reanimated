import { createStackNavigator } from "@react-navigation/stack";
import BasicHome from "../screens/basic/BasicHome";
import BasicDetail from "../screens/basic/BasicDetail";

const Stack = createStackNavigator();

const BasicStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={BasicHome} />
      <Stack.Screen name="detail" component={BasicDetail} />
    </Stack.Navigator>
  );
};

export default BasicStack;
