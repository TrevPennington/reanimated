import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import React from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { mix } from "react-native-redash";

interface AnimatedCardProps {
  transition: Animated.SharedValue<number>;
  index: number;
  card: AnimatedCardType;
  toggled: boolean;
}

const { width } = Dimensions.get("window");
const origin = -(width / 2);

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  toggled,
  index,
  transition,
  card,
}) => {
  // const rotate = toggled ? (index - 1) * 20 : 0;

  const style = useAnimatedStyle(() => {
    const rotate = mix(transition.value, 0, (index - 1) * 20);
    return {
      transform: [
        { translateX: origin },
        { rotate: `${rotate}deg` },
        { translateX: -origin },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        styles.cardStyle,
        {
          backgroundColor: card.color,
        },
        style,
      ]}
    >
      <Text>{card.name}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: 200,
    height: 100,
    ...StyleSheet.absoluteFillObject,
  },
});

export type AnimatedCardType = {
  color: string;
  name: string;
};

export default AnimatedCard;
