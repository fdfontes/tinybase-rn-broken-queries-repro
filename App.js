import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createQueries, createStore } from "tinybase";
import { useCreateTestStore } from "./api/testStore-ui-react";
import { createTestStore } from "./api/testStore";

export default function App() {
  const store = createTestStore();

  const queries = createQueries(store);

  // THE CODE BELOW WORKS:
  // const store = createStore().setTablesSchema({
  //   textCard: {
  //     sourceIcon: { type: "string" },
  //     sourceName: { type: "string" },
  //     category: { type: "string" },
  //     cardId: { type: "string" },
  //     heading: { type: "string" },
  //     subheading: { type: "string" },
  //   },
  // });

  // store.setRow("textCard", "rowid", {
  //   sourceIcon: "lalalala",
  //   sourceName: "lala",
  //   category: "la",
  //   cardId: "la",
  //   heading: "la",
  //   subheading: "la",
  // });

  // const queries = createQueries(store);

  // queries.setQueryDefinition("query", "textCard", ({ select }) => {
  //   select("heading");
  // });

  // console.log("result", queries.getResultTable("query"));

  return (
    <View style={styles.container}>
      <Text>This is a Tinybase test</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
