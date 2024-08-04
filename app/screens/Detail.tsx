import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Link, Stack } from "expo-router";

const detail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "詳細",
        }}
      />
      <Link href="/">
        <Text style={styles.linkText}>ホーム画面へ</Text>
      </Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  linkText: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "400",
    margin: 10,
  },
});
export default detail;
