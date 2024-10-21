import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Header from "./components/header.js";
import ListItem from "./components/list.js";
import Form from "./components/form.js";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить...", key: "1" },
    { text: "Помыть...", key: "2" },
    { text: "Сделать...", key: "3" },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring },
        ...list,
      ];
    });
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key);
    });
  };

  return (
    <main style={styles.main}>
      <View style={styles.header}>
        <Header />
        <Form style={styles.form} addHandler={addHandler} />
        <View>
          <FlatList
            data={listOfItems}
            renderItem={({ item }) => (
              <ListItem el={item} deleteHandler={deleteHandler} />
            )}
          />
        </View>
      </View>
    </main>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  main: {
    paddingLeft: 100,
    paddingRight: 100,
    backgroundColor: "#ffffff",
    height: 900,
    paddingTop: 40,
  },
  form: {
    fontSize: 20,
  }
});

