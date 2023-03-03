import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const ItemCardContainer = ({ title, imageSrc, location, rating, data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ItemScreen", { param: data })}
      className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[160px] my-2"
    >
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-40 object-cover rounded-md"
      />
      <Text className="text-[#428288] text-[18px] font-bold">
        {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
      </Text>

      <View className="flex-row items-center justify-around space-x-4">
        <FontAwesome name="map-marker" size={20} color="#8597A2" />
        <Text className="text-[#428288] text-[14px] font-bold">
          {location?.length > 14 ? `${location.slice(0, 14)}..` : location}
        </Text>
        {/* <Text className="text-[#428288] text-[14px] font-bold">{open}</Text> */}
        <FontAwesome name="star" size={20} color="#D58574" />
        <Text className="text-[#428288] text-[14px] font-bold">{rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
