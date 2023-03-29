import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Alert,
  Button,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[containerStyle, styles.container]}>
      <Text>Hello React Native</Text>
      <TouchableHighlight onPress={() => console.log("Image Tapped")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <Button
        title="Click Me"
        onPress={() =>
          Alert.prompt("Title", "Es7aa", (text) => console.log(text))
        }
        color="blue"
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
