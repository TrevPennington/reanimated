import React from "react";
import { View, Image } from "react-native";
import usePhoto from "../../context/photo-context";

const Detail = () => {
  const { selectedPhoto } = usePhoto();
  const { id, url } = selectedPhoto || { id: "", url: "" };

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ flex: 1 }}
        source={{
          uri: url,
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default Detail;
