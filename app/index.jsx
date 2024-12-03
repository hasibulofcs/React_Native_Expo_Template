import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex items-center justify-center">
        <Text className="text-center">HomeScreen pro</Text>
        <TouchableOpacity
          className="min-h-10 min-w-20 flex items-center justify-center bg-yellow-500 text-white px-2 py-1 mt-6 rounded-md"
          onPress={() => router.push("/profile")}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <StatusBar style="light" backgroundColor="#000" />
    </View>
  );
};

export default HomeScreen;
