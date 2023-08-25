import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createQueries, createStore } from 'tinybase';
import {
  useCell,
  useCreateQueries,
  useCreateStore,
  useResultCell,
} from 'tinybase/lib/ui-react';

export default function App() {
  const store = useCreateStore(() =>
    createStore()
      .setTablesSchema({
        textCard: {
          sourceIcon: { type: 'string' },
          sourceName: { type: 'string' },
          category: { type: 'string' },
          cardId: { type: 'string' },
          heading: { type: 'string' },
          subheading: { type: 'string' },
        },
      })
      .setRow('textCard', 'rowid', {
        sourceIcon: 'lalalala',
        sourceName: 'lala',
        category: 'la',
        cardId: 'la',
        heading: 'la',
        subheading: 'la',
      })
  );

  const queries = useCreateQueries(store, (store) =>
    createQueries(store).setQueryDefinition(
      'query',
      'textCard',
      ({ select }) => {
        select('heading');
      }
    )
  );

  return (
    <View style={styles.container}>
      <Text>
        This is a Tinybase test
        {' - '}
        {useCell('textCard', 'rowid', 'sourceIcon', store)}
        {' - '}
        {useResultCell('query', 'rowid', 'heading', queries)}
      </Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
