import { StatusBar } from "react-native";
import { StyleSheet, Text, SafeAreaView, Platform, Button } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={
          Platform.OS === "android"
            ? "Click Me ya Fala7"
            : "Click Me Ba3d Eznak"
        }
        onPress={() =>
          Platform.OS === "android"
            ? console.log("Android Pressed")
            : console.log("iOS Pressed")
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "android" ? "#fff" : "pink",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
