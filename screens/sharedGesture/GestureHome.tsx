import React, { useEffect } from "react";
import { View, Pressable, Image, Dimensions, StyleSheet } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import usePhoto from "../../context/photo-context";
import { SharedElement } from "react-navigation-shared-element";
import Title from "../../components/title";

const Home = () => {
  const navigation = useNavigation();
  const focused = useIsFocused();
  const { photos, setSelectedPhoto, selectedPhoto } = usePhoto();
  const photoWidth = Dimensions.get("window").width / 3;

  useEffect(() => {
    () => console.log("unmount");
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Title label="Shared Element + gesture navigation" />
      <View style={{ flexDirection: "row", flexWrap: "wrap", flex: 1 }}>
        {photos.map((i) => (
          <Pressable
            key={i.id}
            onPress={() => {
              setSelectedPhoto(i);
              navigation.push("detail");
            }}
          >
            <View
              style={{
                width: photoWidth,
                height: photoWidth,
                opacity: !focused && selectedPhoto?.id === i.id ? 0.3 : 1,
              }}
            >
              <SharedElement
                id={i.id}
                style={{
                  ...StyleSheet.absoluteFillObject,
                }}
              >
                <Image
                  style={{
                    width: `100%`,
                    height: `100%`,
                  }}
                  source={{
                    uri: i.url,
                  }}
                  resizeMode="cover"
                />
              </SharedElement>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Home;
