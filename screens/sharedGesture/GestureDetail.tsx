import React from "react";
import { Dimensions, Image } from "react-native";
import usePhoto from "../../context/photo-context";
import { SharedElement } from "react-navigation-shared-element";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
  withTiming,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
import { useNavigation } from "@react-navigation/native";

const Detail = () => {
  const navigation = useNavigation();
  const { height } = Dimensions.get("window");
  const { selectedPhoto } = usePhoto();
  const { id, url } = selectedPhoto || { id: "", url: "" };

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onActive: ({ translationX, translationY }) => {
      translateX.value = translationX;
      translateY.value = translationY;
    },
    onEnd: ({ translationY, velocityY }) => {
      const goBack = snapPoint(translationY, velocityY, [0, height]) === height;

      if (goBack) {
        runOnJS(navigation.goBack)();
      } else {
        translateX.value = withTiming(0);
        translateY.value = withTiming(0);
      }
    },
  });

  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [0, height],
      [1, 0],
      Extrapolate.CLAMP
    );
    const scale = interpolate(
      translateY.value,
      [0, height],
      [1, 0.5],
      Extrapolate.CLAMP
    );
    return {
      flex: 1,
      opacity: opacity,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={style}>
        <SharedElement id={id} style={{ flex: 1 }}>
          <Image
            style={{ flex: 1 }}
            source={{
              uri: url,
            }}
            resizeMode="cover"
          />
        </SharedElement>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Detail;
