import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontFamily:'SOLARSPACEDEMO-Regular', fontSize: 30}}>Hello</Text>
      <Text style={{fontFamily:'SPACEMISSION-Regular', fontSize: 30}}>Hello</Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}



