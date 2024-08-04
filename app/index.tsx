import { SafeAreaView, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "ホーム",
        }}
      />
      <Link href="/screens/Detail">
        <Text style={styles.linkText}>詳細画面へ</Text>
      </Link>
      <Link href="/screens/BookList">
        <Text style={styles.linkText}>書籍リスト画面へ</Text>
      </Link>
      <Link href="/screens/MovieList">
        <Text style={styles.linkText}>映画リスト画面へ</Text>
      </Link>
      <Link href="/screens/LocalStorageDemo">
        <Text style={styles.linkText}>ローカルストレージ画面へ</Text>
      </Link>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
  },
  linkText: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "400",
    margin: 10,
  },
});
