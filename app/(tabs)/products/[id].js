import { Ionicons } from "@expo/vector-icons";
import { useRouter, useSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

export default function Product() {
  const [product, setProduct] = useState(null);
  const { id } = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (id) {
      fetch("https://fakestoreapi.com/products/" + id)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        });
    }
  }, [id]);
  if (!product) {
    return <Text>Loading ...</Text>;
  }
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ position: "absolute", zIndex: 1, top: 12, left: 12 }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: 25,
            alignSelf: "center",
          }}
        >
          <Text>
            <Ionicons name="arrow-back" size={36} color={"white"} />
          </Text>
        </View>
      </TouchableOpacity>
      <Image
        source={{ uri: product.image }}
        style={{ width: "100%", height: 400, marginBottom: 12 }}
      />
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 28, marginBottom: 12, color: "#383838" }}>
          {product.title}
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 12, color: "#383838" }}>
          {product.description}
        </Text>
        <Text style={{ fontSize: 28, marginBottom: 12, color: "#ffd700" }}>
          {product.rating.rate}
        </Text>
      </View>
    </ScrollView>
  );
}
