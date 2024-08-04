import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { ListItem } from "react-native-elements";

interface Book {
  title: string;
  author: string;
}
const data = [
  {
    id: 1,
    title: "やさしいJava",
    author: "高橋麻奈",
  },
  {
    id: 2,
    title: "基礎Python",
    author: "大津真",
  },
  {
    id: 3,
    title: "基本情報処理技術者合格教本",
    author: "角谷一成",
  },
];
const BookList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "書籍リスト",
        }}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.author}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
        style={styles.list}
      />
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
  list: {
    flex: 1,
    maxWidth: 300,
    width: "100%",
    position: "absolute",
  },
  listContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
});
export default BookList;
