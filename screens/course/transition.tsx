import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AnimatedCard, { AnimatedCardType } from "../../components/animatedCard";
import Animated, {
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const useSpring = (state, config) => {
  const value = useSharedValue(0);

  useEffect(() => {
    value.value = typeof state === "number" ? state : state ? 1 : 0;
  }, [state, value]);

  return useDerivedValue(() => {
    return withSpring(value.value);
  });
};

const useTiming = (state, config) => {
  const value = useSharedValue(0);

  useEffect(() => {
    value.value = typeof state === "number" ? state : state ? 1 : 0;
  }, [state, value]);

  return useDerivedValue(() => {
    return withTiming(value.value, config);
  });
};

const Transition = () => {
  // STATE FROM JS THREAD
  // const [toggled, setToggled] = useState(false);
  // const transition = useTiming(toggled, { duration: 200 });

  // STATE FROM UI THREAD
  const toggled = useSharedValue(false);
  const transition = useDerivedValue(() => {
    return withTiming(toggled.value, { duration: 600 });
  });

  return (
    <View>
      <Text
        style={{ marginTop: 50, textAlign: "center", fontSize: 30 }}
        onPress={() => (toggled.value = !toggled.value)}
      >
        toggle transition
      </Text>

      <View style={{ marginTop: 150, marginLeft: 50 }}>
        {cards.map((c, index) => (
          <AnimatedCard card={c} index={index} transition={transition} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: 200,
    height: 100,
    ...StyleSheet.absoluteFillObject,
  },
});

export default Transition;

const cards: AnimatedCard[] = [
  {
    color: "orange",
    name: "Card 1",
  },
  {
    color: "green",
    name: "Card 2",
  },
  {
    color: "blue",
    name: "Card 3",
  },
];
