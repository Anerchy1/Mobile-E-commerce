import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const ProductCard = ({ product }) => {
  return (
    <View style={{ borderWidth: 1, backgroundColor: "#fff", margin: 12 }}>
      <Image
        source={{ uri: product.image }}
        style={{ width: "100%", height: 200 }}
      />
      <View style={{ padding: 12, borderTopWidth: 1 }}>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 24,
            height: 48,
            overflow: "hidden",
          }}
        >
          {product.title}
        </Text>
      </View>
    </View>
  );
};

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const router = useRouter();
  return (
    <ScrollView style={{ flex: 1, padding: 12 }}>
      <Text>Recent Products</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginHorizontal: -6,
        }}
      >
        {products.map((product) => {
          return (
            <TouchableOpacity
              onPress={() => router.push(`/products/${product.id}`)}
              key={product.id}
              style={{ width: "50%", display: "flex" }}
            >
              <ProductCard product={product} />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
