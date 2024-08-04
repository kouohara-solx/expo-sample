import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { ListItem } from "react-native-elements";

interface Movie {
  id: number;
  title: string;
  releaseYear: string;
}

const MovieList = () => {
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "映画リスト",
        }}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.releaseYear}</ListItem.Subtitle>
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
export default MovieList;
