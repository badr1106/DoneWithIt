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
          flexBasis: 100,
          flexGrow: 1,
          // width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          flexShrink: 1,
          width: 300,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "black",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
