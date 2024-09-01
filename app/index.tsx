import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Aora Home</Text>
      <Link href="/profile" style={{ color: "red" }}>
        Go to profile
      </Link>
    </View>
  );
}
