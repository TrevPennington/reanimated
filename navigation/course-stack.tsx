import { createStackNavigator } from "@react-navigation/stack";
import Fling from "../screens/fling";
import CoursesNav from "../screens/coursesNav";

const Stack = createStackNavigator();

const BasicStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CoursesNav" component={CoursesNav} />
      <Stack.Screen name="fling" component={Fling} />
    </Stack.Navigator>
  );
};

export default BasicStack;
