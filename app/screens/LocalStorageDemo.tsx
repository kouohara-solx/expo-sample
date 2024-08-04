import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";

const LocalStorageDemo = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");

  /**
   * ローカルストレージにテキストを保存する
   */
  const saveText = async () => {
    try {
      if (text === "") {
        alert("テキストが入力されていません");
        return;
      }
      await AsyncStorage.setItem("@savedText", text);
      alert("保存が完了しました");
    } catch (error) {
      console.error("Failed to save the text");
    }
  };

  /**
   * ローカルストレージからテキストを読み込む
   */
  const loadSavedText = async () => {
    try {
      const savedText = await AsyncStorage.getItem("@savedText");
      if (savedText !== null && savedText !== "") {
        alert(savedText);
      } else {
        alert("値が保存されていません");
      }
    } catch (e) {
      console.error("Failed to load the saved text");
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <Stack.Screen
          options={{
            title: "ローカルストレージ",
          }}
        />
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="保存するテキストを入力"
          style={[styles.textInput, isFocused && styles.textInputFocus]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonActive,
          ]}
          onPress={saveText}
        >
          <Text style={{ color: "white" }}>保存する</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonActive,
          ]}
          onPress={loadSavedText}
        >
          <Text style={{ color: "white" }}>テキストを表示</Text>
        </Pressable>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "#0A66C2",
    borderRadius: 100,
    color: "#ffffff",
    display: "flex",
    fontFamily: "System",
    fontSize: 16,
    fontWeight: "600",
    justifyContent: "center",
    lineHeight: 20,
    width: 200,
    minHeight: 40,
    minWidth: 0,
    overflow: "hidden",
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
    position: "relative",
  },
  buttonActive: {
    backgroundColor: "#09223b",
    color: "rgba(255, 255, 255, 0.7)",
  },
  textInput: {
    margin: 10,
    padding: 12,
    paddingRight: 36,
    fontSize: 14,
    lineHeight: 20,
    color: "#24292e",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e1e4e8",
    borderRadius: 6,
    shadowColor: "rgba(225, 228, 232, 0.2)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
    width: 200,
  },
  textInputFocus: {
    borderColor: "#0366d6",
    shadowColor: "rgba(3, 102, 214, 0.3)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
  },
});
export default LocalStorageDemo;
