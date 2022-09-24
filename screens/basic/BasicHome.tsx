import React from "react";
import { View, Text, Pressable, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import usePhoto from "../../context/photo-context";
import Title from "../../components/title";

const Home = () => {
  const navigation = useNavigation();
  const { photos, setSelectedPhoto } = usePhoto();
  const firstPhoto = [photos[0]];
  const photoWidth = Dimensions.get("window").width / 3;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Title label="Basic Navigation" />
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {firstPhoto.map((i) => (
          <Pressable
            key={i.id}
            onPress={() => {
              setSelectedPhoto(i);
              navigation.push("detail");
            }}
          >
            <Image
              style={{ width: photoWidth, height: photoWidth }}
              source={{
                uri: i.url,
              }}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Home;
