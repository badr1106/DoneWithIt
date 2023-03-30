import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center", // main
        alignItems: "center", // secondary
      }}
    >
      <View
        style={{
          backgroundColor: "teal",
          width: 100,
          height: 300,
          alignSelf: "flex-start",
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 200,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
