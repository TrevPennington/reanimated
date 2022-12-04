import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from "react-native-reanimated";
import { clamp } from "react-native-redash";
const CARD_WIDTH = 100;
const Fling = () => {
  const { width, height } = useWindowDimensions();

  const boundX = width - CARD_WIDTH;
  const boundY = height - CARD_WIDTH;

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.offSetX = translateX.value;
      ctx.offSetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = clamp(ctx.offSetX + event.translationX, 0, boundX);
      translateY.value = clamp(ctx.offSetY + event.translationY, 0, boundY);
    },
    onEnd: (event) => {
      translateX.value = withDecay({
        velocity: event.velocityX,
        clamp: [0, boundX],
      });
      translateY.value = withDecay({
        velocity: event.velocityY,
        clamp: [0, boundY],
      });
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <View>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View style={[styles.box, { ...style }]}>
          <View style={styles.box}></View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "peru",
    width: CARD_WIDTH,
    height: CARD_WIDTH,
  },
});

export default Fling;
