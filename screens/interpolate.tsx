import React from "react";
import { View, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  interpolate,
  interpolateColor,
  Extrapolate,
  useSharedValue,
  useAnimatedGestureHandler,
  withTiming,
} from "react-native-reanimated";

const Interpolate = () => {
  const { height } = Dimensions.get("window");

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onActive: ({ translationX, translationY }) => {
      translateX.value = translationX;
      translateY.value = translationY;
    },
    onEnd: () => {
      translateX.value = withTiming(0);
      translateY.value = withTiming(0);
    },
  });

  const style = useAnimatedStyle(() => {
    const screenHeight = height - 140;
    const borderRadius = interpolate(
      translateY.value,
      [0, screenHeight],
      [0, 50],
      Extrapolate.CLAMP
    );
    const backgroundColor = interpolateColor(
      translateY.value,
      [0, height],
      ["red", "blue"]
    );
    return {
      backgroundColor,
      borderRadius,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: 20,
        alignItems: "center",
      }}
    >
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[style, { width: 100, height: 100, backgroundColor: "red" }]}
        />
      </PanGestureHandler>
    </View>
  );
};

export default Interpolate;
